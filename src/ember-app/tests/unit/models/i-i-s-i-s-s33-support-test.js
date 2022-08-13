import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s33-support', 'Unit | Model | i-i-s-i-s-s33-support', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
