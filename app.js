(function(){
  var app = angular.module('store', []);  

  app.controller('StoreController', function(){
    this.product = gem;
  });
var gem = {
    name: 'Dodecahedron',
    price: 110.50,
    description: "Some gems have hidden qualities beyond their luster",
    canPurchase: true
};
})();
