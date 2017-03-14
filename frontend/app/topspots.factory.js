(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TopSpotsFactory', TopSpotsFactory);

    TopSpotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function TopSpotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots,
            addTopSpots: addTopSpots
        };
        return service;

        //////////////// 

        function getTopSpots() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/topspots'
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data found')
                }
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });

            return defer.promise;
        }

        function addTopSpots(data) {
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/topspots',
                data: data
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data found')
                }
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });

            return defer.promise;
        }
    }
})();
