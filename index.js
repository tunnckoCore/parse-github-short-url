/**
 * parse-github-short-url <https://github.com/tunnckoCore/parse-github-short-url>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var regex = require('github-short-url-regex');

/**
 * Parse github short url to object
 *
 * **Example:**
 *
 * ```js
 * var parseGithubShortUrl = require('parse-github-short-url');
 * parseGithubShortUrl('tunnckoCore/glob2fp#master');
 * //=> {
 * //  user: 'tunnckoCore',
 * //  username: 'tunnckoCore',
 * //  org: 'tunnckoCore',
 * //  organization: 'tunnckoCore',
 * //  repo: 'glob2fp',
 * //  repository: 'glob2fp',
 * //  branch: 'master'
 * //};
 * ```
 *
 * @name parseGithubShortUrl
 * @param  {String} `<str>` string to parse for `user/repo#branch`
 * @param  {Object} `[opts]` options are passed to [github-short-url-regex][github-short-url-regex]
 * @return {Object}
 * @api public
 */
module.exports = function parseGithubShortUrl(str, opts) {
  if (!str) {
    throw new Error('parse-github-short-url: should have at least 1 arguments');
  }

  if (typeof str !== 'string') {
    throw new TypeError('parse-github-short-url: expect `str` be string');
  }

  opts = opts || {exact: false};

  var match = [];

  if (regex(opts).test(str)) {
    match = str.match(regex(opts));
  }

  return new ParseGithubShorthand(match);
};

/**
 * Checks given object is valid `ParseGithubShorthand`
 * object, e.g. have `.user`, `.repo` and etc properties
 *
 * **Example:**
 *
 * ```js
 * var shorthandGithub = require('parse-github-short-url');
 * var res = shorthandGithub('tunnckoCore/glob2fp#master');
 * //=> res === {
 * //  user: 'tunnckoCore',
 * //  username: 'tunnckoCore',
 * //  org: 'tunnckoCore',
 * //  organization: 'tunnckoCore',
 * //  repo: 'glob2fp',
 * //  repository: 'glob2fp',
 * //  branch: 'master'
 * //};
 *
 *
 * shorthandGithub.test(res);
 * //=> true
 *
 * var obj = {
 *   username: 'visionmedia',
 *   exact: true
 * }
 *
 * shorthandGithub.test(obj);
 * //=> false
 * ```
 *
 * @param  {Object} `obj` object to check
 * @return {Boolean} return boolean `true` or `false`
 * @api public
 */
module.exports.test = function test(obj) {
  return (obj && obj.user && obj.repo &&
    obj.constructor && obj.constructor.name === 'ParseGithubShorthand')
    ? true : false
};

function ParseGithubShorthand(match) {
  this.user = match[1] || '';
  this.username = match[1] || '';
  this.org = match[1] || '';
  this.organization = match[1] || '';
  this.repo = match[2] || '';
  this.repository = match[2] || '';
  this.branch = match[3] || '';

  return this;
}


