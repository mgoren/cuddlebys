Cuddlebys.AuctionController = Ember.ObjectController.extend({
  notAddingLot: true,

  actions: {
    hideButton: function() {
      this.set('notAddingLot', false);
    },
    delete: function(lot) {
      lot.destroyRecord();
    },
    callLightbox: function(lot) {
      // debugger;
      this.set('currentLot', lot)
      $("#myModal").modal('show');
    }
  }
});
