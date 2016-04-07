import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  if (Ember.isEmpty(params)) {
    return '';
  } else {
    const [raw] = params;
    if (Math.abs(raw) >= 1000) {
      return `${Math.round(raw * 0.01) / 10}K`;
    } else {
      return raw;
    }
  }
}

export default Ember.Helper.helper(niceNumber);
