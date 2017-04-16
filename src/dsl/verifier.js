/**
 * Provider Verifier service
 * @module ProviderVerifier
 */

'use strict'

module.exports.verifyProvider = (opts) => {
  return require('@pact-foundation/pact-node').verifyPacts(opts)
}
