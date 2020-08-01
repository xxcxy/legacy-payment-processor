/**
 * The default configuration file.
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  KAFKA_URL: process.env.KAFKA_URL || 'localhost:9092',
  // below are used for secure Kafka connection, they are optional
  // for the local Kafka, they are not needed
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY,

  // Kafka group id
  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'legacy-challenge-processor',
  KAFKA_ERROR_TOPIC: process.env.KAFKA_ERROR_TOPIC || 'common.error.reporting',
  BUSAPI_URL: process.env.BUSAPI_URL || 'https://api.topcoder-dev.com/v5',
  RETRY_TIMEOUT: process.env.RETRY_TIMEOUT || 10 * 1000,

  // Topics to listen
  CREATE_CHALLENGE_TOPIC: process.env.CREATE_CHALLENGE_TOPIC || 'challenge.notification.create',
  UPDATE_CHALLENGE_TOPIC: process.env.UPDATE_CHALLENGE_TOPIC || 'challenge.notification.update',

  // Auth0 parameters
  AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token',
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://m2m.topcoder-dev.com/',
  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME || 90,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || '',
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || '',
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,

  // Topcoder APIs
  V5_CHALLENGE_API_URL: process.env.V5_CHALLENGE_API_URL || 'http://localhost:4000/v5/challenges',
  V5_CHALLENGE_TYPE_API_URL: process.env.V5_CHALLENGE_TYPE_API_URL || 'http://localhost:4000/v5/challenge-types',
  V4_CHALLENGE_TYPE_API_URL: process.env.V4_CHALLENGE_TYPE_API_URL || 'http://localhost:4000/v4/challenge-types',
  V4_CHALLENGE_API_URL: process.env.V4_CHALLENGE_API_URL || 'http://localhost:4000/v4/challenges',
  V4_TECHNOLOGIES_API_URL: process.env.V4_TECHNOLOGIES_API_URL || 'http://localhost:4000/v4/technologies',
  V4_PLATFORMS_API_URL: process.env.V4_PLATFORMS_API_URL || 'http://localhost:4000/v4/platforms',
  V5_PROJECTS_API_URL: process.env.V5_PROJECTS_API_URL || 'https://api.topcoder-dev.com/v5/projects',
  V5_CHALLENGE_MIGRATION_API_URL: process.env.V5_CHALLENGE_MIGRATION_API_URL || 'https://api.topcoder-dev.com/v5/challenge-migration',

  // PHASE IDs
  REGISTRATION_PHASE_ID: process.env.REGISTRATION_PHASE_ID || 'a93544bc-c165-4af4-b55e-18f3593b457a',
  SUBMISSION_PHASE_ID: process.env.SUBMISSION_PHASE_ID || '6950164f-3c5e-4bdc-abc8-22aaf5a1bd49',
  CHECKPOINT_SUBMISSION_PHASE_ID: process.env.CHECKPOINT_SUBMISSION_PHASE_ID || 'd8a2cdbe-84d1-4687-ab75-78a6a7efdcc8',

  // challenge types
  TASK_TYPE_ID: process.env.TASK_TYPE_ID || 'e885273d-aeda-42c0-917d-bfbf979afbba',
  TASK_TYPE_IDS: {
    DEVELOP: process.env.DEVELOP_TASK_TYPE_ID || 'e885273d-aeda-42c0-917d-bfbf979afbba',
    DESIGN: process.env.DESIGN_TASK_TYPE_ID || '149a2013-92b9-4ca9-b35d-c337d47a2490',
    QA: process.env.QA_TASK_TYPE_ID || 'a91e69fd-6240-4227-8484-66b8defc4ca9',
    DATA_SCENCE: process.env.DATA_SCENCE_TASK_TYPE_ID || 'b3b60e22-e302-4db8-bef8-4eaff965565f'
  },
  CHALLENGE_TYPE_ID: process.env.CHALLENGE_TYPE_ID || '94eee466-9255-4b60-88d8-4f59c1810dd0',
  FIRST_2_FINISH_TYPE_ID: process.env.FIRST_2_FINISH_TYPE_ID || '6950164f-3c5e-4bdc-abc8-22aaf5a1bd49'
}
