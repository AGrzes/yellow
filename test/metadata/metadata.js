const { Metadata } = require('../../src/metadata/main')
const expect = require('chai').use(require('chai-subset')).expect;

describe('Metadata', () => {
  it('Should export Metadata class', function () {
    expect(Metadata).to.exist
  })

  it('Should accept DataModel descriptor', function () {
    expect(() => new Metadata({})).to.throw('Expected type: DataModel')
    expect(() => new Metadata({type:'DataModel'})).not.to.throw('Expected type: DataModel')
  })


})