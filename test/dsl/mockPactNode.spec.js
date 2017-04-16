var expect = require('chai').expect

var mockPactNode = require('../../src/dsl/mockPactNode')

describe('MockPactNode', () => {

  describe('#start', () => {
    it('it should return a successful promise', (done) => {
      expect(mockPactNode.start()).to.eventually.be.fulfilled.notify(done)
    })
  })

  describe('#stop', () => {
    it('it should return a successful promise', (done) => {
      expect(mockPactNode.stop()).to.eventually.be.fulfilled.notify(done)
    })
  })

  describe('#delete', () => {
    it('it should return a successful promise', (done) => {
      expect(mockPactNode.delete()).to.eventually.be.fulfilled.notify(done)
    })
  })
})
