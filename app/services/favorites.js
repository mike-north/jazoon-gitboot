import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', []);
  },
  toggleFavorite(repo) {
    const items = this.get('items');
    const index = items.indexOf(repo.id);
    if (index < 0) {
      items.addObject(repo.id);
    } else {
      items.removeAt(index);
    }
    console.log(items.join(', '));
  }
});
