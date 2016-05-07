'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('el nombre debe ser rafael', function () {
    appempic.getName().should.equal('rafael');
  });

  it('el nombre debe ser luna', function () {
    appempic.getLastName().should.equal('luna');
  });

});
