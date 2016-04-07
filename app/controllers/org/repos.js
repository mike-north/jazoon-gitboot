import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  favorites: inject.service(),
  actions: {
    toggleFavorite(repo) {
      this.get('favorites').toggleFavorite(repo);
    }
  }
});
