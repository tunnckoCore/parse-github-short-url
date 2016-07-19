/*!
 * parse-github-short-url <https://github.com/tunnckoCore/parse-github-short-url>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var gh = require('./index')

test('should return null if not a string or if empty string', function (done) {
  test.strictEqual(gh(''), null)
  test.strictEqual(gh(), null)
  test.strictEqual(gh(null), null)
  test.strictEqual(gh(undefined), null)
  test.strictEqual(gh(123), null)
  test.strictEqual(gh([1, 2, 3]), null)
  done()
})

test('should return object with `owner` and `branch` when invalid pattern', function (done) {
  test.strictEqual(gh('https://github.com/jonschlinkert/micromatch').owner, 'https')
  test.strictEqual(gh('https://github.com/jonschlinkert/micromatch').repo, null)
  test.strictEqual(gh('https://github.com/jonschlinkert/micromatch').name, null)
  test.strictEqual(gh('https://github.com/jonschlinkert/micromatch').branch, null)
  done()
})

test('should get user', function (done) {
  test.strictEqual(gh('assemble/verb#branch').owner, 'assemble')
  test.strictEqual(gh('assemble/verb#dev').owner, 'assemble')
  test.strictEqual(gh('assemble/verb').owner, 'assemble')
  test.strictEqual(gh('assemble').owner, 'assemble')
  done()
})

test('should get version for npm shorthands like `user/repo@version`', function (done) {
  test.strictEqual(gh('assemble/verb@v1').branch, null)
  test.strictEqual(gh('assemble/verb@v1').version, 'v1')
  test.strictEqual(gh('assemble/verb@v3.1.3').branch, null)
  test.strictEqual(gh('assemble/verb@v3.1.3').version, 'v3.1.3')
  done()
})

test('should get branch for github shorthands like `user/repo#dev`', function (done) {
  test.strictEqual(gh('assemble/verb#dev').branch, 'dev')
  test.strictEqual(gh('assemble/verb#dev').version, undefined)
  test.strictEqual(gh('assemble/verb#feature').branch, 'feature')
  test.strictEqual(gh('assemble/verb#feature').version, undefined)
  done()
})

test('should get repo name (.name)', function (done) {
  test.strictEqual(gh('assemble/verb#branch').name, 'verb')
  test.strictEqual(gh('assemble/verb#dev').name, 'verb')
  test.strictEqual(gh('assemble/verb').name, 'verb')
  test.strictEqual(gh('assemble').name, null)
  done()
})

test('should get branch (and get master branch if not defined)', function (done) {
  test.strictEqual(gh('gulpjs/gulp#branch').branch, 'branch')
  test.strictEqual(gh('gulpjs/gulp#dev').branch, 'dev')
  test.strictEqual(gh('gulpjs/gulp').branch, null)
  test.strictEqual(gh('gulpjs').branch, null)
  done()
})

test('should get a full repo path', function (done) {
  test.strictEqual(gh('mochajs/mocha#branch').repo, 'mochajs/mocha')
  test.strictEqual(gh('mochajs/mocha#dev').repo, 'mochajs/mocha')
  test.strictEqual(gh('mochajs/mocha').repo, 'mochajs/mocha')
  done()
})

test('should know when repo is not defined', function (done) {
  test.strictEqual(gh('assemble').name, null)
  test.strictEqual(gh('assemble').repo, null)
  test.strictEqual(gh('assemble').owner, 'assemble')
  done()
})

test('should allow passing opts that will remain in returned object', function (done) {
  test.strictEqual(gh('foo', { bar: 'qux' }).name, null)
  test.strictEqual(gh('foo', { bar: 'qux' }).repo, null)
  test.strictEqual(gh('foo', { bar: 'qux' }).owner, 'foo')
  test.strictEqual(gh('foo', { bar: 'qux' }).bar, 'qux')
  done()
})
