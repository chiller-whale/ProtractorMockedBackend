'use strict';

describe('Mocking an httpbackend', function() {

  var ptor;
  var Mocks = require('./utils/httpBackendMock.js');
  var sampleDataFile = require('./mockPhones/phones.json');
  var configObject = require('./utils/backendConfig.json');

  configObject.getUrl = 'phones/phones.json';
  configObject.getResponse = sampleDataFile;

  ptor = protractor.getInstance();

  it("Should mock a backnd", function(){
      ptor.addMockModule('httpBackendMock', Mocks.httpBackendMock, configObject);
      ptor.get('app/index.html', 5);
      ptor.sleep(5000);
  });

});
