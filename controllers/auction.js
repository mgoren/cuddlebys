Cuddlebys.AuctionController = Ember.ObjectController.extend({
  notAddingLot: true,

  actions: {
    hideButton: function() {
      this.set('notAddingLot', false);
    },
    delete: function(lot) {
      lot.destroyRecord();
    }
  }
});
