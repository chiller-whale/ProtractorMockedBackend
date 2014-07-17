'use strict';

var httpBackendMock = function() {

  angular.module('httpBackendMock', ['ngMockE2E', 'phonecatControllers'])
    .value('configData', arguments[0])
    .run(function($httpBackend,configData) {

      console.log("Bootstrapped");

      $httpBackend.whenGET(configData.getUrl).respond(configData.getHeader,configData.getResponse);
      $httpBackend.whenGET(/.*/).passThrough();

      $httpBackend.whenPOST(configData.postUrl).respond(configData.postHeader,configData.postResponse);
      $httpBackend.whenPOST(/.*/).passThrough();

      $httpBackend.whenPUT(configData.putUrl).respond(configData.putHeader,configData.putResponse);
      $httpBackend.whenPUT(/.*/).passThrough();

      $httpBackend.whenPATCH(configData.patchUrl).respond(configData.patchHeader,configData.patchResponse);
      $httpBackend.whenPATCH(/.*/).passThrough();

    });
};

module.exports.httpBackendMock = httpBackendMock;
