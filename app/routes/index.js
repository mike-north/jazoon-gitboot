import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations`)
      .then((data) => data.json())
      .then((jsonData) => {
        return jsonData.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.name
          };
        });
      });
  }
});
