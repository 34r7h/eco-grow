'use strict';

angular.module('EcossentialsApp')
  .controller('AdminCtrl', function ($scope, angularFire) {
    
    var perUrl = new Firebase("https://ecogrow.firebaseio.com/perks");
    angularFire(perUrl, $scope, "perks");
    
    

    var teaUrl = new Firebase("https://ecogrow.firebaseio.com/team");
    angularFire(teaUrl, $scope, "team");

  	var supUrl = new Firebase("https://ecogrow.firebaseio.com/suppliers");
    angularFire(supUrl, $scope, "suppliers");

    var stoUrl = new Firebase("https://ecogrow.firebaseio.com/story");
    angularFire(stoUrl, $scope, "story");

    var newUrl = new Firebase("https://ecogrow.firebaseio.com/newItems");
    angularFire(newUrl, $scope, "newItems");
      var juiceUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/juicebar");
      angularFire(juiceUrl, $scope, "juicebar");
      var kitchenUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/kitchen");
      angularFire(kitchenUrl, $scope, "kitchen");
      var miscUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/misc");
      angularFire(miscUrl, $scope, "misc");
      var renoUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/reno");
      angularFire(renoUrl, $scope, "reno");
      var storeUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/store");
      angularFire(storeUrl, $scope, "store");

    var budUrl = new Firebase("https://ecogrow.firebaseio.com/budget");
    angularFire(budUrl, $scope, "budget");

    var shaUrl = new Firebase("https://ecogrow.firebaseio.com/share");
    angularFire(shaUrl, $scope, "share");

    var funUrl = new Firebase("https://ecogrow.firebaseio.com/fund");
    angularFire(funUrl, $scope, "fund");
    

	var commentsRef = new Firebase("https://ecogrow.firebaseio.com/");
  
  $(function() {
    // Put your firebaseRef.on call here!
    perUrl.on("value", function(snap) {
  // snap.val() will contain the JS object.
        for (var i = 0; i < snap.length; i++) {
          alert(snap[i].val());
        };
    });
});


	var auth = new FirebaseSimpleLogin(commentsRef, function(error, user) {
	  if (!error) {
	    // Success!
	  }
	});
	$scope.fbLogin = function(){
		auth.login('facebook', {
  			rememberMe: true,
  			scope: 'email,user_likes'
		});
	}
	$scope.logOut = function(){
		auth.logout();
	}


 
  $scope.scout = function() {
    teaUrl.push($scope.teammate);
  }

  $scope.offer = function() {
    perUrl.push($scope.perk);
  }

  $scope.partner = function() {
    supUrl.push($scope.supplier);
  }

      $scope.produceJuice = function() {
        juiceUrl.push($scope.juiceBar);
      }
      $scope.produceKitchen = function() {
        kitchenUrl.push($scope.kitcheN);
      }
       $scope.produceMisc = function() {
        miscUrl.push($scope.misC);
      }
      $scope.produceReno = function() {
        renoUrl.push($scope.renO);
      }
      $scope.produceStore = function() {
        storeUrl.push($scope.storE);
      }

  $scope.summarize = function() {
      budUrl.push($scope.category);
    }
    $scope.imagine = function() {
      stoUrl.push($scope.imagination);
    }



    $scope.removePerk = function (thing) {
      $scope.perks.splice($scope.perks.indexOf(thing), 1);
    };
    $scope.removePlayer = function (thing) {
      $scope.team.splice($scope.team.indexOf(thing), 1);
    };
    $scope.removePartner = function (thing) {
      $scope.suppliers.splice($scope.suppliers.indexOf(thing), 1);
    };
    $scope.removeItem = function (thing, x) {
      $scope.newItems[x].splice($scope.newItems[x].indexOf(thing), 1);
    };
    $scope.removeCategory = function (thing) {
      $scope.budget.splice($scope.budget.indexOf(thing), 1);
    };
    $scope.removeSnippet = function (thing) {
      $scope.story.splice($scope.story.indexOf(thing), 1);
    };
 /*   
$scope.deleteItem = function(id){
    var itemRef = new Firebase('https://ecogrow.firebaseio.com/perks' + '/' + id);
    angularFire(itemRef, $scope, "perkz");
    itemRef.remove();
  }
  $scope.bhu = function(x){
    alert(x);
  }

$scope.remove = function (idx) {

  $(function() {
    // Put your firebaseRef.on call here!
    perUrl.on("value", function(snap) {
  // snap.val() will contain the JS object.
        for (var i = 0; i < snap.length; i++) {
          alert(snap[i]).val();
        };
    });
});

    var delPerk = $scope.perks[idx];

    API.Delete({ id: delPerk.id }, function (success) {

        $scope.perks.splice(idx, 1);
    });
};
    
*/
});
