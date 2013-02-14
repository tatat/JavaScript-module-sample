var expect = require('chai').expect
  , Nyan = require('../lib/nyan');

describe('Nyan', function() {
  var object;

  beforeEach(function() {
    object = new Nyan();
  });

  it('should return nyan', function() {
    expect(object.nyan()).to.equal('nyan');
    expect(object.nyan('')).to.equal('nyan');
    expect(object.nyan(null)).to.equal('nyan');
    expect(object.nyan(undefined)).to.equal('nyan');
  });

  it('should return nyan0', function() {
    expect(object.nyan(0)).to.equal('nyan0');
  });

  it('should return nyan!', function() {
    expect(object.nyan('!')).to.equal('nyan!')
  });
});