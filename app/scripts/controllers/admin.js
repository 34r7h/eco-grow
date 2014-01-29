'use strict';

angular.module('EcossentialsApp')
    .controller('AdminCtrl', function ($scope, angularFire) {
    
        var perUrl = new Firebase("https://ecogrow.firebaseio.com/perks"),
            teaUrl = new Firebase("https://ecogrow.firebaseio.com/team"),
            supUrl = new Firebase("https://ecogrow.firebaseio.com/suppliers"),
            stoUrl = new Firebase("https://ecogrow.firebaseio.com/story"),
            sto1Url = new Firebase("https://ecogrow.firebaseio.com/story1"),
            sto2Url = new Firebase("https://ecogrow.firebaseio.com/story2"),
            newUrl = new Firebase("https://ecogrow.firebaseio.com/newItems"),
            juiceUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/juicebar"),
            kitchenUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/kitchen"),
            miscUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/misc"),
            renoUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/reno"),
            storeUrl = new Firebase("https://ecogrow.firebaseio.com/newItems/store"),
            budUrl = new Firebase("https://ecogrow.firebaseio.com/budget"),
            shaUrl = new Firebase("https://ecogrow.firebaseio.com/share"),
            funUrl = new Firebase("https://ecogrow.firebaseio.com/fund"),
            commentsRef = new Firebase("https://ecogrow.firebaseio.com/");
            
        angularFire(perUrl, $scope, "perks");
        angularFire(teaUrl, $scope, "team");
        angularFire(supUrl, $scope, "suppliers");
        angularFire(stoUrl, $scope, "story");
        angularFire(sto1Url, $scope, "story1");
        angularFire(sto2Url, $scope, "story2");
        angularFire(newUrl, $scope, "newItems");
        angularFire(juiceUrl, $scope, "juicebar");
        angularFire(kitchenUrl, $scope, "kitchen");
        angularFire(miscUrl, $scope, "misc");
        angularFire(renoUrl, $scope, "reno");
        angularFire(storeUrl, $scope, "store");
        angularFire(budUrl, $scope, "budget");
        angularFire(shaUrl, $scope, "share");
        angularFire(funUrl, $scope, "fund");
    


	    var auth = new FirebaseSimpleLogin(commentsRef, function (error, user) {
            if (!error) {
	    // Success!
                // alert("Successful Login");
            }
        });
        $scope.fbLogin = function () {
            auth.login('facebook', {
                rememberMe: true,
                scope: 'email,user_likes'
            });
        }
        $scope.logOut = function () {
            auth.logout();
        }

        $scope.scout = function () {
            teaUrl.push($scope.teammate);
        }
        $scope.offer = function () {
            perUrl.push($scope.perk);
        }
        $scope.partner = function () {
            supUrl.push($scope.supplier);
        }
        
        $scope.produceJuice = function () {
            juiceUrl.push($scope.juiceBar);
        }
        $scope.produceKitchen = function () {
            kitchenUrl.push($scope.kitcheN);
        }
        $scope.produceMisc = function () {
            miscUrl.push($scope.misC);
        }
        $scope.produceReno = function () {
            renoUrl.push($scope.renO);
        }
        $scope.produceStore = function () {
            storeUrl.push($scope.storE);
        }
        $scope.summarize = function () {
            budUrl.push($scope.category);
        }
        $scope.imagine = function () {
            stoUrl.push($scope.imagination);
        }
        $scope.imagine1 = function () {
            sto1Url.push($scope.imagination1);
        }
        $scope.imagine2 = function () {
            sto2Url.push($scope.imagination2);
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
        $scope.removeSnippet1 = function (thing) {
            $scope.story1.splice($scope.story1.indexOf(thing), 1);
        };
        $scope.removeSnippet2 = function (thing) {
            $scope.story2.splice($scope.story2.indexOf(thing), 1);
        };

    });
