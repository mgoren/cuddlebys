Cuddlebys.Lot = DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  auction: DS.belongsTo('auction', {async: true})
});
