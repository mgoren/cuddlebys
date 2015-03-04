Cuddlebys.Auction = DS.Model.extend({
  title: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
