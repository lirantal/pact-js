/**
 * Pact Node Mock
 *
 * Mocks the Pact Node interface so that we can have a single pact DSL without
 * writing annoying logic to work around web vs non-web environments.
 *
 * @module MockPactNode
 */

'use strict'

module.exports.start = (opts) => {
  return Promise.resolve()
}

module.exports.stop = (opts) => {
  return Promise.resolve()
}

module.exports.delete = (opts) => {
  return Promise.resolve()
}
