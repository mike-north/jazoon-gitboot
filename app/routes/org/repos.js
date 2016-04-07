import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'emberjs'
    }, {
      id: 'data'
    }, {
      id: 'emberjs.github.io'
    }];
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});
