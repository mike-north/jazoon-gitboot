import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('org', {path: 'org/:organization_id'}, function() {
    this.route('repos');
    this.route('repo', {path: 'repo/:repository_id'});
  });
});

export default Router;
