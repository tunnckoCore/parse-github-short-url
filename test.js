/**
 * parse-github-short-url <https://github.com/tunnckoCore/parse-github-short-url>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var parseUrl = require('./index');

describe('parse-github-short-url:', function() {
  describe('should throw', function() {
    it('Error when no arguments', function(done) {
      assert.throws(parseUrl, Error);
      done()
    });

    it('TypeError when first argument not Sting given', function(done) {
      function fixture() {
        parseUrl({})
      }
      assert.throws(fixture, TypeError);
      done();
    });
  });
  describe('should return object with empty fields for missing properties', function(done) {
    it('when string not contain possible pattern', function(done) {
      var actual = parseUrl('some string');
      var fixture = {
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      };
      assert.deepEqual(fixture, actual);
      done();
    });

    it('when string not a valid `user/repo` pattern', function(done) {
      var actual = parseUrl('some tunnckoCore!glob2fp#feature string');
      var fixture = {
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      };
      assert.deepEqual(fixture, actual);
      done();
    });
  });

  describe('should return', function() {
    it('object with `user`, `repo` and `branch`', function(done) {
      var actual = {
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: 'feature'
      };
      var fixture = 'tunnckoCore/glob2fp#feature';

      assert.deepEqual(parseUrl(fixture), actual);
      done()
    });

    it('object with `user` and `repo` properties only', function(done) {
      var actual = {
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: ''
      };
      var fixture = 'tunnckoCore/glob2fp';

      assert.deepEqual(parseUrl(fixture), actual);
      done();
    });
  });
});
