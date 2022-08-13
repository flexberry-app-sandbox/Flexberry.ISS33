import { moduleForModel, test } from 'ember-qunit';

moduleForModel('форма', 'Unit | Serializer | форма', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:форма',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-i-s-s33-list-inv',
    'model:i-i-s-i-s-s33-list-size',
    'model:i-i-s-i-s-s33-support',
    'model:инвестиции',
    'model:размер',
    'model:форма',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
