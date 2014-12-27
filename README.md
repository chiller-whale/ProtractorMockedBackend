ProtractorMockedBackend
=======================

Demonstrate a mocked backend via the Angular Phonecat Tutorial. test/e2e utils and secnarios.js contain examples

The purpose of this reposistory is to demonstrate the ability of mocking responses from services in angularjs and testing the
responses using protractor. This really comes in handy for front-end development when the service that is being mocked is
either not available or is being developed at the same time the front-end is being developed. Doing this with protractor
affords the ability to have an automated testing suite with static data which is independent from any real service which decouples
the testing environment from any particular dev environment (which could possibly cause a test to fail if the exact data is not
duplicated correctly accross dev environments). It also allows the ability to automattedly test anything that would be tested
with protractor without the need of the backend service being available or fully functioning. Try this by editing the response in 
test/e2e/mockPhones/phones.json to see how phones are removed or added depending on the contents of the file.
