# Topcoder - Legacy Payment Processor

## Verification

verification video: https://monosnap.com/file/vqiyEeOr5cYilkToKhfiNqEo4urBKv

start Kafka server, start mock api server and start the processor

1. start kafka-console-producer to write messages to `challenge.notification.update` topic:
  `bin/kafka-console-producer.sh --broker-list localhost:9092 --topic challenge.notification.update`
2. write update challenge message:
  `{"topic":"challenge.notification.update","originator":"topcoder-challenges-api","timestamp":"2019-05-14T00:00:00.000Z","mime-type":"application/json","payload":{"projectId":16640,"terms":[{"id":"317cd8f9-d66c-4f2a-8774-63c612d99cd4","roleId":"732339e7-8e30-49d7-9198-cccf9451e221"}],"task":{"isTask":true,"isAssigned":true,"memberId":"40029484"},"typeId":"ecd58c69-238f-43a4-a4bb-d172719b9f31","legacyId":30058134,"endDate":"2021-01-30T02:09:47.000Z","status":"Completed","trackId":"9b6fc876-f4d9-4ccb-9dfd-419247628825","created":"2021-01-28T02:09:48.677Z","updatedBy":"tcwebservice","createdBy":"jcori","name":"Test Task for Sync","timelineTemplateId":"53a307ce-b4b3-4d6f-b9a1-3741a58f77e6","groups":[],"descriptionFormat":"markdown","updated":"2021-01-28T02:10:55.674Z","phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","duration":86400,"id":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","name":"Submission","isOpen":false,"scheduledStartDate":"2021-01-29T02:09:47.000Z","scheduledEndDate":"2021-01-30T02:09:47.000Z","actualStartDate":"2021-01-29T02:09:47.000Z","actualEndDate":"2021-01-30T02:09:47.000Z"},{"phaseId":"003a4b14-de5d-43fc-9e35-835dbeb6af1f","duration":86400,"id":"bb743041-1226-4686-969e-69f90a01c7fa","name":"Iterative Review","isOpen":false,"predecessor":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","scheduledStartDate":"2021-01-30T02:09:47.000Z","scheduledEndDate":"2021-01-31T02:09:47.000Z","actualStartDate":"2021-01-30T02:09:47.000Z","actualEndDate":"2021-01-31T02:09:47.000Z"},{"phaseId":"ad985cff-ad3e-44de-b54e-3992505ba0ae","duration":86400,"id":"30f0573f-9dc2-4117-825e-ebbf40b96852","name":"Approval","isOpen":false,"predecessor":"bb743041-1226-4686-969e-69f90a01c7fa","scheduledStartDate":"2021-01-31T02:09:47.000Z","scheduledEndDate":"2021-02-01T02:09:47.000Z","actualStartDate":"2021-01-31T02:09:47.000Z","actualEndDate":"2021-02-01T02:09:47.000Z"}],"prizeSets":[{"type":"copilot","prizes":[{"type":"USD","value":1}]},{"type":"placement","prizes":[{"type":"USD","value":10}]}],"startDate":"2021-01-29T02:09:47.000Z","legacy":{"track":"DEVELOP","subTrack":"FIRST_2_FINISH","reviewType":"INTERNAL","confidentialityType":"public","forumId":0,"directProjectId":23678,"isTask":true},"description":"Test","id":"77e031dd-bd35-45f3-bad8-4cc41dbc282f","tags":["Google"],"track":"Development","type":"Task"}}`

3. Watch the logs of processor

```bash
info: Handle Kafka event message; Topic: challenge.notification.update; Partition: 0; Offset: 12; Message: {"topic":"challenge.notification.update","originator":"topcoder-challenges-api","timestamp":"2019-05-14T00:00:00.000Z","mime-type":"application/json","payload":{"projectId":16640,"terms":[{"id":"317cd8f9-d66c-4f2a-8774-63c612d99cd4","roleId":"732339e7-8e30-49d7-9198-cccf9451e221"}],"task":{"isTask":true,"isAssigned":true,"memberId":"40029484"},"typeId":"ecd58c69-238f-43a4-a4bb-d172719b9f31","legacyId":30058134,"endDate":"2021-01-30T02:09:47.000Z","status":"Completed","trackId":"9b6fc876-f4d9-4ccb-9dfd-419247628825","created":"2021-01-28T02:09:48.677Z","updatedBy":"tcwebservice","createdBy":"jcori","name":"Test Task for Sync","timelineTemplateId":"53a307ce-b4b3-4d6f-b9a1-3741a58f77e6","groups":[],"descriptionFormat":"markdown","updated":"2021-01-28T02:10:55.674Z","phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","duration":86400,"id":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","name":"Submission","isOpen":false,"scheduledStartDate":"2021-01-29T02:09:47.000Z","scheduledEndDate":"2021-01-30T02:09:47.000Z","actualStartDate":"2021-01-29T02:09:47.000Z","actualEndDate":"2021-01-30T02:09:47.000Z"},{"phaseId":"003a4b14-de5d-43fc-9e35-835dbeb6af1f","duration":86400,"id":"bb743041-1226-4686-969e-69f90a01c7fa","name":"Iterative Review","isOpen":false,"predecessor":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","scheduledStartDate":"2021-01-30T02:09:47.000Z","scheduledEndDate":"2021-01-31T02:09:47.000Z","actualStartDate":"2021-01-30T02:09:47.000Z","actualEndDate":"2021-01-31T02:09:47.000Z"},{"phaseId":"ad985cff-ad3e-44de-b54e-3992505ba0ae","duration":86400,"id":"30f0573f-9dc2-4117-825e-ebbf40b96852","name":"Approval","isOpen":false,"predecessor":"bb743041-1226-4686-969e-69f90a01c7fa","scheduledStartDate":"2021-01-31T02:09:47.000Z","scheduledEndDate":"2021-02-01T02:09:47.000Z","actualStartDate":"2021-01-31T02:09:47.000Z","actualEndDate":"2021-02-01T02:09:47.000Z"}],"prizeSets":[{"type":"copilot","prizes":[{"type":"USD","value":1}]},{"type":"placement","prizes":[{"type":"USD","value":10}]}],"startDate":"2021-01-29T02:09:47.000Z","legacy":{"track":"DEVELOP","subTrack":"FIRST_2_FINISH","reviewType":"INTERNAL","confidentialityType":"public","forumId":0,"directProjectId":23678,"isTask":true},"description":"Test","id":"77e031dd-bd35-45f3-bad8-4cc41dbc282f","tags":["Google"],"track":"Development","type":"Task"}}.
debug: ENTER processUpdate
debug: input arguments
debug: { message:
   { topic: 'challenge.notification.update',
     originator: 'topcoder-challenges-api',
     timestamp: '2019-05-14T00:00:00.000Z',
     'mime-type': 'application/json',
     payload:
      { projectId: 16640,
        terms: [Array],
        task: [Object],
        typeId: 'ecd58c69-238f-43a4-a4bb-d172719b9f31',
        legacyId: 30058134,
        endDate: '2021-01-30T02:09:47.000Z',
        status: 'Completed',
        trackId: '9b6fc876-f4d9-4ccb-9dfd-419247628825',
        created: '2021-01-28T02:09:48.677Z',
        updatedBy: 'tcwebservice',
        createdBy: 'jcori',
        name: 'Test Task for Sync',
        timelineTemplateId: '53a307ce-b4b3-4d6f-b9a1-3741a58f77e6',
        groups: [],
        descriptionFormat: 'markdown',
        updated: '2021-01-28T02:10:55.674Z',
        phases: [Array],
        prizeSets: [Array],
        startDate: '2021-01-29T02:09:47.000Z',
        legacy: [Object],
        description: 'Test',
        id: '77e031dd-bd35-45f3-bad8-4cc41dbc282f',
        tags: [Array],
        track: 'Development',
        type: 'Task' } } }
debug: Getting nextId
debug: this._availableId = -1
debug: this._availableId = 10
debug: Getting nextId
debug: this._availableId = -1
debug: this._availableId = 10
debug: Preparing SQL INSERT INTO payment_detail (payment_detail_id, net_amount,  gross_amount, payment_status_id, modification_rationale_id, payment_desc, payment_type_id, date_modified, date_due, payment_method_id, component_project_id, create_date, charity_ind, total_amount, installment_number, create_user) VALUES(?,?,?,?,?,?,?, CURRENT, CURRENT + INTERVAL (15) DAY(5) TO DAY,?,?, CURRENT,?,?,?,?)
debug: Preparing SQL INSERT INTO payment (payment_id, user_id, most_recent_detail_id, create_date, modify_date) VALUES(?,?,?, CURRENT, CURRENT)
debug: Preparing SQL INSERT INTO payment_detail_xref (payment_id, payment_detail_id) VALUES(?,?)
info: Payment 244788 with detail 285060 has been inserted
debug: Getting nextId
debug: this._availableId = 9
debug: this._availableId = 9
debug: Getting nextId
debug: this._availableId = 9
debug: this._availableId = 9
debug: Preparing SQL INSERT INTO payment_detail (payment_detail_id, net_amount,  gross_amount, payment_status_id, modification_rationale_id, payment_desc, payment_type_id, date_modified, date_due, payment_method_id, component_project_id, create_date, charity_ind, total_amount, installment_number, create_user) VALUES(?,?,?,?,?,?,?, CURRENT, CURRENT + INTERVAL (15) DAY(5) TO DAY,?,?, CURRENT,?,?,?,?)
debug: Preparing SQL INSERT INTO payment (payment_id, user_id, most_recent_detail_id, create_date, modify_date) VALUES(?,?,?, CURRENT, CURRENT)
debug: Preparing SQL INSERT INTO payment_detail_xref (payment_id, payment_detail_id) VALUES(?,?)
info: Payment 244789 with detail 285061 has been inserted
debug: EXIT processUpdate
debug: output arguments
debug: Successfully processed message
```

4. write update challenge message without legacy id:
  `{"topic":"challenge.notification.update","originator":"topcoder-challenges-api","timestamp":"2019-05-14T00:00:00.000Z","mime-type":"application/json","payload":{"projectId":16640,"terms":[{"id":"317cd8f9-d66c-4f2a-8774-63c612d99cd4","roleId":"732339e7-8e30-49d7-9198-cccf9451e221"}],"task":{"isTask":true,"isAssigned":true,"memberId":"40029484"},"typeId":"ecd58c69-238f-43a4-a4bb-d172719b9f31","endDate":"2021-01-30T02:09:47.000Z","status":"Completed","trackId":"9b6fc876-f4d9-4ccb-9dfd-419247628825","created":"2021-01-28T02:09:48.677Z","updatedBy":"tcwebservice","createdBy":"jcori","name":"Test Task for Sync","timelineTemplateId":"53a307ce-b4b3-4d6f-b9a1-3741a58f77e6","groups":[],"descriptionFormat":"markdown","updated":"2021-01-28T02:10:55.674Z","phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","duration":86400,"id":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","name":"Submission","isOpen":false,"scheduledStartDate":"2021-01-29T02:09:47.000Z","scheduledEndDate":"2021-01-30T02:09:47.000Z","actualStartDate":"2021-01-29T02:09:47.000Z","actualEndDate":"2021-01-30T02:09:47.000Z"},{"phaseId":"003a4b14-de5d-43fc-9e35-835dbeb6af1f","duration":86400,"id":"bb743041-1226-4686-969e-69f90a01c7fa","name":"Iterative Review","isOpen":false,"predecessor":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","scheduledStartDate":"2021-01-30T02:09:47.000Z","scheduledEndDate":"2021-01-31T02:09:47.000Z","actualStartDate":"2021-01-30T02:09:47.000Z","actualEndDate":"2021-01-31T02:09:47.000Z"},{"phaseId":"ad985cff-ad3e-44de-b54e-3992505ba0ae","duration":86400,"id":"30f0573f-9dc2-4117-825e-ebbf40b96852","name":"Approval","isOpen":false,"predecessor":"bb743041-1226-4686-969e-69f90a01c7fa","scheduledStartDate":"2021-01-31T02:09:47.000Z","scheduledEndDate":"2021-02-01T02:09:47.000Z","actualStartDate":"2021-01-31T02:09:47.000Z","actualEndDate":"2021-02-01T02:09:47.000Z"}],"prizeSets":[{"type":"copilot","prizes":[{"type":"USD","value":1}]},{"type":"placement","prizes":[{"type":"USD","value":10}]}],"startDate":"2021-01-29T02:09:47.000Z","legacy":{"track":"DEVELOP","subTrack":"FIRST_2_FINISH","reviewType":"INTERNAL","confidentialityType":"public","forumId":0,"directProjectId":23678,"isTask":true},"description":"Test","id":"77e031dd-bd35-45f3-bad8-4cc41dbc282f","tags":["Google"],"track":"Development","type":"Task"}}`

5. Watch the logs of processor

 ```bash
info: Handle Kafka event message; Topic: challenge.notification.update; Partition: 0; Offset: 15; Message: {"topic":"challenge.notification.update","originator":"topcoder-challenges-api","timestamp":"2019-05-14T00:00:00.000Z","mime-type":"application/json","payload":{"projectId":16640,"terms":[{"id":"317cd8f9-d66c-4f2a-8774-63c612d99cd4","roleId":"732339e7-8e30-49d7-9198-cccf9451e221"}],"task":{"isTask":true,"isAssigned":true,"memberId":"40029484"},"typeId":"ecd58c69-238f-43a4-a4bb-d172719b9f31","endDate":"2021-01-30T02:09:47.000Z","status":"Completed","trackId":"9b6fc876-f4d9-4ccb-9dfd-419247628825","created":"2021-01-28T02:09:48.677Z","updatedBy":"tcwebservice","createdBy":"jcori","name":"Test Task for Sync","timelineTemplateId":"53a307ce-b4b3-4d6f-b9a1-3741a58f77e6","groups":[],"descriptionFormat":"markdown","updated":"2021-01-28T02:10:55.674Z","phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","duration":86400,"id":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","name":"Submission","isOpen":false,"scheduledStartDate":"2021-01-29T02:09:47.000Z","scheduledEndDate":"2021-01-30T02:09:47.000Z","actualStartDate":"2021-01-29T02:09:47.000Z","actualEndDate":"2021-01-30T02:09:47.000Z"},{"phaseId":"003a4b14-de5d-43fc-9e35-835dbeb6af1f","duration":86400,"id":"bb743041-1226-4686-969e-69f90a01c7fa","name":"Iterative Review","isOpen":false,"predecessor":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","scheduledStartDate":"2021-01-30T02:09:47.000Z","scheduledEndDate":"2021-01-31T02:09:47.000Z","actualStartDate":"2021-01-30T02:09:47.000Z","actualEndDate":"2021-01-31T02:09:47.000Z"},{"phaseId":"ad985cff-ad3e-44de-b54e-3992505ba0ae","duration":86400,"id":"30f0573f-9dc2-4117-825e-ebbf40b96852","name":"Approval","isOpen":false,"predecessor":"bb743041-1226-4686-969e-69f90a01c7fa","scheduledStartDate":"2021-01-31T02:09:47.000Z","scheduledEndDate":"2021-02-01T02:09:47.000Z","actualStartDate":"2021-01-31T02:09:47.000Z","actualEndDate":"2021-02-01T02:09:47.000Z"}],"prizeSets":[{"type":"copilot","prizes":[{"type":"USD","value":1}]},{"type":"placement","prizes":[{"type":"USD","value":10}]}],"startDate":"2021-01-29T02:09:47.000Z","legacy":{"track":"DEVELOP","subTrack":"FIRST_2_FINISH","reviewType":"INTERNAL","confidentialityType":"public","forumId":0,"directProjectId":23678,"isTask":true},"description":"Test","id":"77e031dd-bd35-45f3-bad8-4cc41dbc282f","tags":["Google"],"track":"Development","type":"Task"}}.
debug: ENTER processUpdate
debug: input arguments
debug: { message:
   { topic: 'challenge.notification.update',
     originator: 'topcoder-challenges-api',
     timestamp: '2019-05-14T00:00:00.000Z',
     'mime-type': 'application/json',
     payload:
      { projectId: 16640,
        terms: [Array],
        task: [Object],
        typeId: 'ecd58c69-238f-43a4-a4bb-d172719b9f31',
        endDate: '2021-01-30T02:09:47.000Z',
        status: 'Completed',
        trackId: '9b6fc876-f4d9-4ccb-9dfd-419247628825',
        created: '2021-01-28T02:09:48.677Z',
        updatedBy: 'tcwebservice',
        createdBy: 'jcori',
        name: 'Test Task for Sync',
        timelineTemplateId: '53a307ce-b4b3-4d6f-b9a1-3741a58f77e6',
        groups: [],
        descriptionFormat: 'markdown',
        updated: '2021-01-28T02:10:55.674Z',
        phases: [Array],
        prizeSets: [Array],
        startDate: '2021-01-29T02:09:47.000Z',
        legacy: [Object],
        description: 'Test',
        id: '77e031dd-bd35-45f3-bad8-4cc41dbc282f',
        tags: [Array],
        track: 'Development',
        type: 'Task' } } }
warn: The message 77e031dd-bd35-45f3-bad8-4cc41dbc282f does not contain a legacy id
debug: Getting nextId
debug: this._availableId = -1
debug: this._availableId = 10
debug: Getting nextId
debug: this._availableId = -1
debug: this._availableId = 10
debug: Preparing SQL INSERT INTO payment_detail (payment_detail_id, net_amount,  gross_amount, payment_status_id, modification_rationale_id, payment_desc, payment_type_id, date_modified, date_due, payment_method_id, component_project_id, create_date, charity_ind, total_amount, installment_number, create_user) VALUES(?,?,?,?,?,?,?, CURRENT, CURRENT + INTERVAL (15) DAY(5) TO DAY,?,?, CURRENT,?,?,?,?)
debug: Preparing SQL INSERT INTO payment (payment_id, user_id, most_recent_detail_id, create_date, modify_date) VALUES(?,?,?, CURRENT, CURRENT)
debug: Preparing SQL INSERT INTO payment_detail_xref (payment_id, payment_detail_id) VALUES(?,?)
info: Payment 244798 with detail 285070 has been inserted
debug: Getting nextId
debug: this._availableId = 9
debug: this._availableId = 9
debug: Getting nextId
debug: this._availableId = 9
debug: this._availableId = 9
debug: Preparing SQL INSERT INTO payment_detail (payment_detail_id, net_amount,  gross_amount, payment_status_id, modification_rationale_id, payment_desc, payment_type_id, date_modified, date_due, payment_method_id, component_project_id, create_date, charity_ind, total_amount, installment_number, create_user) VALUES(?,?,?,?,?,?,?, CURRENT, CURRENT + INTERVAL (15) DAY(5) TO DAY,?,?, CURRENT,?,?,?,?)
debug: Preparing SQL INSERT INTO payment (payment_id, user_id, most_recent_detail_id, create_date, modify_date) VALUES(?,?,?, CURRENT, CURRENT)
debug: Preparing SQL INSERT INTO payment_detail_xref (payment_id, payment_detail_id) VALUES(?,?)
info: Payment 244799 with detail 285071 has been inserted
debug: EXIT processUpdate
debug: output arguments
debug: Successfully processed message
 ```

 6. write update challenge message with Draft status:
 `{"topic":"challenge.notification.update","originator":"topcoder-challenges-api","timestamp":"2019-05-14T00:00:00.000Z","mime-type":"application/json","payload":{"projectId":16640,"terms":[{"id":"317cd8f9-d66c-4f2a-8774-63c612d99cd4","roleId":"732339e7-8e30-49d7-9198-cccf9451e221"}],"task":{"isTask":true,"isAssigned":true,"memberId":"40029484"},"typeId":"ecd58c69-238f-43a4-a4bb-d172719b9f31","legacyId":30058134,"endDate":"2021-01-30T02:09:47.000Z","status":"Draft","trackId":"9b6fc876-f4d9-4ccb-9dfd-419247628825","created":"2021-01-28T02:09:48.677Z","updatedBy":"tcwebservice","createdBy":"jcori","name":"Test Task for Sync","timelineTemplateId":"53a307ce-b4b3-4d6f-b9a1-3741a58f77e6","groups":[],"descriptionFormat":"markdown","updated":"2021-01-28T02:10:55.674Z","phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","duration":86400,"id":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","name":"Submission","isOpen":false,"scheduledStartDate":"2021-01-29T02:09:47.000Z","scheduledEndDate":"2021-01-30T02:09:47.000Z","actualStartDate":"2021-01-29T02:09:47.000Z","actualEndDate":"2021-01-30T02:09:47.000Z"},{"phaseId":"003a4b14-de5d-43fc-9e35-835dbeb6af1f","duration":86400,"id":"bb743041-1226-4686-969e-69f90a01c7fa","name":"Iterative Review","isOpen":false,"predecessor":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","scheduledStartDate":"2021-01-30T02:09:47.000Z","scheduledEndDate":"2021-01-31T02:09:47.000Z","actualStartDate":"2021-01-30T02:09:47.000Z","actualEndDate":"2021-01-31T02:09:47.000Z"},{"phaseId":"ad985cff-ad3e-44de-b54e-3992505ba0ae","duration":86400,"id":"30f0573f-9dc2-4117-825e-ebbf40b96852","name":"Approval","isOpen":false,"predecessor":"bb743041-1226-4686-969e-69f90a01c7fa","scheduledStartDate":"2021-01-31T02:09:47.000Z","scheduledEndDate":"2021-02-01T02:09:47.000Z","actualStartDate":"2021-01-31T02:09:47.000Z","actualEndDate":"2021-02-01T02:09:47.000Z"}],"prizeSets":[{"type":"copilot","prizes":[{"type":"USD","value":1}]},{"type":"placement","prizes":[{"type":"USD","value":10}]}],"startDate":"2021-01-29T02:09:47.000Z","legacy":{"track":"DEVELOP","subTrack":"FIRST_2_FINISH","reviewType":"INTERNAL","confidentialityType":"public","forumId":0,"directProjectId":23678,"isTask":true},"description":"Test","id":"77e031dd-bd35-45f3-bad8-4cc41dbc282f","tags":["Google"],"track":"Development","type":"Task"}}`

 7. Watch the logs of processor:

 ```bash
  info: Handle Kafka event message; Topic: challenge.notification.update; Partition: 0; Offset: 16; Message: {"topic":"challenge.notification.update","originator":"topcoder-challenges-api","timestamp":"2019-05-14T00:00:00.000Z","mime-type":"application/json","payload":{"projectId":16640,"terms":[{"id":"317cd8f9-d66c-4f2a-8774-63c612d99cd4","roleId":"732339e7-8e30-49d7-9198-cccf9451e221"}],"task":{"isTask":true,"isAssigned":true,"memberId":"40029484"},"typeId":"ecd58c69-238f-43a4-a4bb-d172719b9f31","legacyId":30058134,"endDate":"2021-01-30T02:09:47.000Z","status":"Draft","trackId":"9b6fc876-f4d9-4ccb-9dfd-419247628825","created":"2021-01-28T02:09:48.677Z","updatedBy":"tcwebservice","createdBy":"jcori","name":"Test Task for Sync","timelineTemplateId":"53a307ce-b4b3-4d6f-b9a1-3741a58f77e6","groups":[],"descriptionFormat":"markdown","updated":"2021-01-28T02:10:55.674Z","phases":[{"phaseId":"6950164f-3c5e-4bdc-abc8-22aaf5a1bd49","duration":86400,"id":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","name":"Submission","isOpen":false,"scheduledStartDate":"2021-01-29T02:09:47.000Z","scheduledEndDate":"2021-01-30T02:09:47.000Z","actualStartDate":"2021-01-29T02:09:47.000Z","actualEndDate":"2021-01-30T02:09:47.000Z"},{"phaseId":"003a4b14-de5d-43fc-9e35-835dbeb6af1f","duration":86400,"id":"bb743041-1226-4686-969e-69f90a01c7fa","name":"Iterative Review","isOpen":false,"predecessor":"af753aa9-ac3d-4321-b2a8-f183d48cacfe","scheduledStartDate":"2021-01-30T02:09:47.000Z","scheduledEndDate":"2021-01-31T02:09:47.000Z","actualStartDate":"2021-01-30T02:09:47.000Z","actualEndDate":"2021-01-31T02:09:47.000Z"},{"phaseId":"ad985cff-ad3e-44de-b54e-3992505ba0ae","duration":86400,"id":"30f0573f-9dc2-4117-825e-ebbf40b96852","name":"Approval","isOpen":false,"predecessor":"bb743041-1226-4686-969e-69f90a01c7fa","scheduledStartDate":"2021-01-31T02:09:47.000Z","scheduledEndDate":"2021-02-01T02:09:47.000Z","actualStartDate":"2021-01-31T02:09:47.000Z","actualEndDate":"2021-02-01T02:09:47.000Z"}],"prizeSets":[{"type":"copilot","prizes":[{"type":"USD","value":1}]},{"type":"placement","prizes":[{"type":"USD","value":10}]}],"startDate":"2021-01-29T02:09:47.000Z","legacy":{"track":"DEVELOP","subTrack":"FIRST_2_FINISH","reviewType":"INTERNAL","confidentialityType":"public","forumId":0,"directProjectId":23678,"isTask":true},"description":"Test","id":"77e031dd-bd35-45f3-bad8-4cc41dbc282f","tags":["Google"],"track":"Development","type":"Task"}}.
  info: The message type Task, status Draft doesn't match {type: 'Task', status: 'Completed'}.
```