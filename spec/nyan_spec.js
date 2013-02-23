if (
  typeof module !== 'undefined' &&
  module != null &&
  typeof module.exports === 'object'
) {
  var sinon = require('sinon')
    , chai = require('chai').use(require('sinon-chai'))
    , expect = chai.expect
    , Nyan = require('../lib/nyan');
} else {
  var expect = chai.expect;
}

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