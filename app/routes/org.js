import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${params.id}`)
      .then((data) => data.json())
      .then((jsonData) => {
        const item = jsonData.data;
        return {
          id: item.id,
          name: item.attributes.name
        };
      });
  }
});
