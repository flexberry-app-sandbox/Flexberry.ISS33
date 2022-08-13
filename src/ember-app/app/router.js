import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s33-form-l');
  this.route('i-i-s-i-s-s33-form-e',
  { path: 'i-i-s-i-s-s33-form-e/:id' });
  this.route('i-i-s-i-s-s33-form-e.new',
  { path: 'i-i-s-i-s-s33-form-e/new' });
  this.route('i-i-s-i-s-s33-investment-l');
  this.route('i-i-s-i-s-s33-investment-e',
  { path: 'i-i-s-i-s-s33-investment-e/:id' });
  this.route('i-i-s-i-s-s33-investment-e.new',
  { path: 'i-i-s-i-s-s33-investment-e/new' });
  this.route('i-i-s-i-s-s33-size-l');
  this.route('i-i-s-i-s-s33-size-e',
  { path: 'i-i-s-i-s-s33-size-e/:id' });
  this.route('i-i-s-i-s-s33-size-e.new',
  { path: 'i-i-s-i-s-s33-size-e/new' });
  this.route('i-i-s-i-s-s33-support-l');
  this.route('i-i-s-i-s-s33-support-e',
  { path: 'i-i-s-i-s-s33-support-e/:id' });
  this.route('i-i-s-i-s-s33-support-e.new',
  { path: 'i-i-s-i-s-s33-support-e/new' });
});

export default Router;
