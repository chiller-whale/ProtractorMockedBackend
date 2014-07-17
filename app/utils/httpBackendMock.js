
var httpBackendMock = function() {
  angular.module('httpBackendMock', ['ngMockE2E', 'phonecatControllers'])
    .run(function($httpBackend) {

      $httpBackend.whenGET('phones/phones.json').respond(200);

    });
};
