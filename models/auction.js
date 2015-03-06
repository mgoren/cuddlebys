Cuddlebys.Auction = DS.Model.extend({
  title: DS.attr(),
  lots: DS.hasMany('lot', {async: true}),
  firstImage: function() {
    return this.get('lots').get('firstObject').get('image');
  }.property('lots.@each.image')
});
