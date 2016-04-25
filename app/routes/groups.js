import Ember from 'ember';

var groups = [{
  id: 1,
  title: 'Grand Old Mansion',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 2,
  title: 'Urban Living',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  id: 3,
  title: 'Downtown Charm',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
  model() {
    return groups;
//    return this.store.findAll('groups');
  }
});
