Cuddlebys.Lot = DS.Model.extend({
  name: DS.attr(),
  auction: DS.belongsTo('auction', {async: true})
});
