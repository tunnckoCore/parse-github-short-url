## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Parse a string (github shorthand url) into an object with `user`/`username`, `repo`/`repository`, `branch` using the `github-short-url-regex`

## Install
```bash
npm install parse-github-short-url
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [.parseGithubShortUrl](parse-github-short-url/index.js#L39)
> Parse github short url to object

* `<str>` **{String}** string to parse for `user/repo#branch`  
* `[opts]` **{Object}** options are passed to [github-short-url-regex][github-short-url-regex]  
* `returns` **{Object}**  

**Example:**

```js
var parseGithubShortUrl = require('parse-github-short-url');
parseGithubShortUrl('tunnckoCore/glob2fp#master');
//=> {
//  user: 'tunnckoCore',
//  username: 'tunnckoCore',
//  org: 'tunnckoCore',
//  organization: 'tunnckoCore',
//  repo: 'glob2fp',
//  repository: 'glob2fp',
//  branch: 'master'
//};
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/parse-github-short-url
[npmjs-img]: https://img.shields.io/npm/v/parse-github-short-url.svg?style=flat&label=parse-github-short-url

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-github-short-url?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-github-short-url.svg?style=flat

[license-url]: https://github.com/tunnckoCore/parse-github-short-url/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/parse-github-short-url
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-github-short-url.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/parse-github-short-url
[daviddm-img]: https://img.shields.io/david/tunnckoCore/parse-github-short-url.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/parse-github-short-url/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 22, 2015_

[github-short-url-regex]: https://github.com/tunnckoCore/github-short-url-regex