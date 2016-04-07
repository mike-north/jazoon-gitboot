import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model(params) {
    const org = this.modelFor('org');
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${org.id}/repositories`)
      .then((data) => data.json())
      .then((jsonData) => {
        return jsonData.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.name
          };
        });
      });
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});
