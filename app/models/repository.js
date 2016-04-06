import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  organization: belongsTo('organization'),
  stargazersCount: attr('number'),
  watchersCount: attr('number')
});