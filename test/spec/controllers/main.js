'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('learnAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('attaches a list of 3 resources to the scope', function () {
    expect(scope.resources.length).toBe(3);
  });
});
