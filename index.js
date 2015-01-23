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

  if (regex(opts).test(str)) {
    str = regex(opts).exec(str);

    return {
      user: RegExp.$1,
      username: RegExp.$1,
      org: RegExp.$1,
      organization: RegExp.$1,
      repo: RegExp.$2,
      repository: RegExp.$2,
      branch: RegExp.$3
    };
  }

  return {
    user: '',
    username: '',
    org: '',
    organization: '',
    repo: '',
    repository: '',
    branch: ''
  };
};
