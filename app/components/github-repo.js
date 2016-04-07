import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  favorites: inject.service(),
  isFavorited: computed('repo', 'favorites.items.[]', function() {
    return this.get('favorites.items').indexOf(this.get('repo.id')) >= 0;
  }),
  icon: computed('isFavorited', function() {
    return this.get('isFavorited') ? 'star' : 'star_border';
  }),
  actions: {
    toggleFavorite(repo) {
      this.get('favorites').toggleFavorite(repo);
    }
  }
});
