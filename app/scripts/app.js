'use strict';

var ecoApp = angular.module('EcossentialsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/grow', {
        templateUrl: 'views/grow.html',
        controller: 'GrowCtrl'
      })
      .when('/p-video', {
        templateUrl: 'views/p-video.html',
        controller: 'PVideoCtrl'
      })
      .when('/p-share', {
        templateUrl: 'views/p-share.html',
        controller: 'PShareCtrl'
      })
      .when('/p-story', {
        templateUrl: 'views/p-story.html',
        controller: 'PStoryCtrl'
      })
      
      .when('/p-stream', {
        templateUrl: 'views/p-stream.html',
        controller: 'PStreamCtrl'
      })
      
      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl'
      })
      .when('/p-funders', {
        templateUrl: 'views/p-funders.html',
        controller: 'MainCtrl'
      })
      .when('/p-team', {
        templateUrl: 'views/p-team.html',
        controller: 'PTeamCtrl'
      })
      .when('/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'ContributeCtrl'
      })
      .when('/p-contribute', {
        templateUrl: 'views/p-contribute.html',
        controller: 'PContributeCtrl'
      })
      .when('/footer', {
        templateUrl: 'views/footer.html',
        controller: 'FooterCtrl'
      })
      .when('/support', {
        templateUrl: 'views/support.html',
        controller: 'SupportCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/perk', {
        templateUrl: 'views/perk.html',
        controller: 'PerkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

ecoApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "xxxxxxx",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // enable Stripe checkout
    // note: the second parameter identifies your publishable key; in order to use the 
    // shopping cart with Stripe, you have to create a merchant account with 
    // Stripe. You can do that here:
    // https://manage.stripe.com/register
    myCart.addCheckoutParameters("Stripe", "pk_test_xxxx",
        {
            chargeurl: "https://localhost:1234/processStripe.aspx"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});
