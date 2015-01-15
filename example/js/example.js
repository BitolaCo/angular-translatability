angular.module("translateExample", ["ngRoute", "angular.translate"])
    .controller("testCtrl", ["$scope", "$timeout", "Dictionary", "$q", "$routeParams", "$location", "$window", "$log",
        function($scope, $timeout, Dictionary, $q, $routeParams, $location, $window, $log) {

        $scope.translator = new Dictionary();

        var mk = $scope.translator.add("mk", {
            "Hello world": "Zdravo, cvet"
        }).then(function(data) {
            $log.info("Added mk", data);
        }).catch(function(err) {
            $log.error("Error adding mk", err);
        });

        // Simulate a slow loading external file.
        var es = $scope.translator.add("es", "languages/es.json");
        var en = $scope.translator.add("en-us", "languages/en-us.json");

        var mk2 = $scope.translator.extend("mk", {
            "Bye": "Cao"
        }).then(function(data) {
            $log.info("Updated mk", data);
        }).catch(function(err) {
            $log.error("Error updating mk", err);
        });

        $scope.switchLanguage = function(lang) {
            if (lang) {
                $scope.translator.use(lang).then(function(data) {
                    $location.search("lang", lang);
                    $log.log("Switched to " + lang, data);
                }).catch(function(err) {
                    $log.error("Could not switch language to " + lang + ": ", err);
                });
            }
        };

        $q.all([en, mk, mk2, es]).then(function() {

            $log.log("languages loaded");

            // Set the initial language based on a parameter.
            if($routeParams.lang) {
                $scope.switchLanguage($routeParams.lang);
            }

        });

    }]);