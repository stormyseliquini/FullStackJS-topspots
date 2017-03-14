(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory', 'toastr'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'TopSpotsController';

        activate();

        ////////////////

        function activate() {
            getTopSpots();
        }

        function getTopSpots() {
            TopSpotsFactory.getTopSpots().then(
                function(response) {

                    vm.topspots = response.data;
                    console.log(vm.toptspots)
                    toastr.success('We have topspots!');
                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem: ' + error.data);
                    } else {
                        toastr.info('no data found')
                    }
                }
            )
        }

        vm.addTopSpot = function() {
            var topspot = {
                "name": vm.name,
                "description": vm.description,
                "location": [vm.locationLAT + ',' + vm.locationLONG]
            }
            TopSpotsFactory.addTopSpots(topspot).then(
                function(response) {

                    vm.topspots = response.data;
                    console.log(vm.toptspots)
                    toastr.success('We have topspots!');
                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem: ' + error.data);
                    } else {
                        toastr.info('no data found')
                    }
                }
            )
        }
        vm.name = '';
        vm.description = '';
        vm.locationLAT = '';
        vm.locationLONG = '';

    }

})();
