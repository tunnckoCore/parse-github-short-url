/**
 * parse-github-short-url <https://github.com/tunnckoCore/parse-github-short-url>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var regex = require('github-short-url-regex');
var typeOf = require('kind-of');

module.exports = function parseGithubShortUrl(str, opts) {
  if (!str) {
    throw new Error('parse-github-short-url: should have at least 1 arguments');
  }

  if (typeOf(str) !== 'string') {
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
