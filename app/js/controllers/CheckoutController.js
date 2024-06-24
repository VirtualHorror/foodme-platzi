'use strict';

foodMeApp.controller('CheckoutController',
    function CheckoutController($scope, cart, customer, $location, $timeout) {

  $scope.cart = cart;
  $scope.restaurantId = cart.restaurant.id;
  $scope.customer = customer;
  $scope.submitting = false;
  $scope.step = 1; // Initialize checkout process at step 1

  // Function to proceed to the next step in the checkout process
  $scope.nextStep = function() {
    if ($scope.step < 3) {
      $scope.step++;
    }
  };

  // Function to go back to the previous step in the checkout process
  $scope.prevStep = function() {
    if ($scope.step > 1) {
      $scope.step--;
    }
  };

  // Function to finalize the purchase
  $scope.purchase = function() {
    if ($scope.submitting) return;

    $scope.submitting = true;
    cart.submitOrder().then(function(orderId) {
      // Simulate a delay for processing payment and finalizing order
      $timeout(function() {
        $location.path('thank-you').search({orderId: orderId});
      }, 2000);
    });
  };
});
