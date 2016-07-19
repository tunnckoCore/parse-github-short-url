# [parse-github-short-url][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Parse a github/npm shorthand (user/repo#branch or user/repo@version) URL into an object.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i parse-github-short-url --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var gh = require('parse-github-short-url')
gh('tunnckoCore/parse-function')
```

Results in:

```json
{
  "owner": "tunnckoCore",
  "name": "parse-function",
  "repo": "tunnckoCore/parse-function",
  "branch": null,
}
```

### More examples
Or see the tests

```js
// assemble/verb#1.2.3
{
  "owner": "assemble",
  "name": "verb",
  "repo": "assemble/verb",
  "branch": "1.2.3",
}

// assemble/verb@~3.0.5
{
  "owner": "assemble",
  "name": "verb",
  "repo": "assemble/verb",
  "branch": null,
  "version": "~3.0.5"
}

// assemble/verb#dev
{
  "owner": "assemble",
  "name": "verb",
  "repo": "assemble/verb",
  "branch": "dev",
}

// assemble/verb
{
  "owner": "assemble",
  "name": "verb",
  "repo": "assemble/verb",
  "branch": null,
}

// assemble
{
  "owner": "assemble",
  "name": null,
  "repo": null,
  "branch": null,
}

// gulpjs/gulp@v3.8.1
{
  "owner": "gulpjs",
  "name": "gulp",
  "repo": "gulpjs/gulp",
  "branch": null,
  "version": "v3.8.1"
}
```


## Related
- [gitclone-cli](https://github.com/tunnckocore/gitclone-cli): Git clone github repository with pattern like `user/repo#branch`
- [github-short-url-regex](https://github.com/regexps/github-short-url-regex): Regular expression (Regex) for matching github shorthand (user/repo#branch).
- [parse-github-url](https://github.com/jonschlinkert/parse-github-url): Parse a github URL into an object.
- [stringify-github-short-url](https://github.com/tunnckoCore/stringify-github-short-url): Stringify github shorthand url object returned from `parse-github-short-url`
- [stringify-github-url](https://github.com/jonschlinkert/stringify-github-url): Generate a GitHub URL from an object.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/parse-github-short-url/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/parse-github-short-url
[npmjs-img]: https://img.shields.io/npm/v/parse-github-short-url.svg?label=parse-github-short-url

[license-url]: https://github.com/tunnckoCore/parse-github-short-url/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/parse-github-short-url
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/parse-github-short-url.svg

[travis-url]: https://travis-ci.org/tunnckoCore/parse-github-short-url
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-github-short-url.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-github-short-url
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-github-short-url.svg

[david-url]: https://david-dm.org/tunnckoCore/parse-github-short-url
[david-img]: https://img.shields.io/david/tunnckoCore/parse-github-short-url.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg