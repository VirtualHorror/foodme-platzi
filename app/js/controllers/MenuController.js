'use strict';

foodMeApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart) {

  $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});
  $scope.cart = cart;

  // Load the menu items for the restaurant
  $scope.restaurant.$promise.then(function(data) {
    $scope.menuItems = data.menuItems;
  });

  // Function to add an item to the cart
  $scope.addToCart = function(menuItem) {
    cart.add(menuItem, $scope.restaurant);
  };

  // Function to open the modal for item details
  $scope.showItemDetails = function(menuItem) {
    // Implementation for opening modal dialog
    $('#menuItemModal' + menuItem.id).modal('show');
  };
});
