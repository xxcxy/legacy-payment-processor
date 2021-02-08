/**
 * Processor Service
 * Processes messages gathered from Kafka
 */

const _ = require('lodash')
const Joi = require('@hapi/joi')
const logger = require('../common/logger')
const helper = require('../common/helper')
const paymentService = require('./paymentService')
const config = require('config')

/**
 * Process update challenge message
 * @param {Object} message the kafka message
 */
async function processUpdate (message) {
  const createUserId = await helper.getUserId(message.payload.createdBy)
  if (!message.payload.legacyId) {
    logger.warn(`The message ${message.payload.id} does not contain a legacy id`)
    // the connection statement can't accept undefined, so set it to null
    message.payload.legacyId = null
  }
  // the same properties of userPayment and copilotPayment
  const basePayment = {
    statusId: config.PAYMENT_STATUS_ID,
    modificationRationaleId: config.MODIFICATION_RATIONALE_ID,
    methodId: config.PAYMENT_METHOD_ID,
    projectId: message.payload.legacyId,
    charityInd: config.CHARITY_IND,
    installmentNumber: config.INSTALLMENT_NUMBER,
    createUser: createUserId
  }

  // the properties of userPayment
  const userPayment = _.assign({
    memberId: message.payload.task.memberId,
    amount: _.head(_.find(message.payload.prizeSets, ['type', 'placement']).prizes).value,
    desc: `Task - ${message.payload.name} - First Place`,
    typeId: config.WINNER_PAYMENT_TYPE_ID
  }, basePayment)

  // the properties of copilotPayment
  const copilotPayment = _.assign({
    memberId: createUserId,
    amount: _.head(_.find(message.payload.prizeSets, ['type', 'copilot']).prizes).value,
    desc: `Task - ${message.payload.name} - Copilot`,
    typeId: config.COPILOT_PAYMENT_TYPE_ID
  }, basePayment)

  await paymentService.createPayment(userPayment)
  await paymentService.createPayment(copilotPayment)
}

processUpdate.schema = {
  message: Joi.object().keys({
    topic: Joi.string().required(),
    originator: Joi.string().required(),
    timestamp: Joi.date().required(),
    'mime-type': Joi.string().required(),
    payload: Joi.object().keys({
      id: Joi.string(),
      legacyId: Joi.number().integer().positive(),
      task: Joi.object().keys({
        memberId: Joi.string().allow(null)
      }).unknown(true).required(),
      name: Joi.string(),
      prizeSets: Joi.array().items(Joi.object().keys({
        type: Joi.string().valid('copilot', 'placement').required(),
        prizes: Joi.array().items(Joi.object().keys({
          value: Joi.number().positive().required()
        }).unknown(true))
      }).unknown(true)).min(1),
      type: Joi.string().required(),
      status: Joi.string().required(),
      createdBy: Joi.string().required()
    }).unknown(true).required()
  }).required()
}

module.exports = {
  processUpdate
}

logger.buildService(module.exports)
