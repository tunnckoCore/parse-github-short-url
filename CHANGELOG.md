

## 3.2.0 - 2016-07-20
- Release v3.2.0 / npm@v3.2.0
- breaking: `.version` no more be `null` by default - it just won't exist

## 3.1.1 - 2016-07-20
- Release v3.1.1 / npm@v3.1.1
- allow passing more props to returned object by passing second argument

## 3.1.0 - 2016-04-27
- Release v3.1.0 / npm@v3.1.0
- breaking: expose `version` property
  + both defaults of `version` and `branch` are now `null`
  + based on using `#` or `@`: 
  + if `#` version is `null` and branch gets the value
  + if `@` branch is `null` and version gets the value

## 3.0.1 - 2016-04-27
- Release v3.0.1 / npm@v3.0.1
- a little cleanup 

## 3.0.0 - 2016-02-02
- Release v3.0.0 / npm@v3.0.0
- still supports `npm` shorthand, e.g. `gulpjs/gulp@v3.8.1`
- simplify, follow `parse-github-url` style
  + `owner` - user or org
  + `name` - name of the repo
  + `repo` - full repo path, e.g. `gulpjs/gulp`
  + `branch` - branch name (defaults to `master`) or npm version

## 2.0.0 - 2015-03-26
- Release v2.0.0 / npm@v2.0.0
- **add** `related` section
- **update** bump to `github-short-url-regex@v3.0.0` which **MAY** cause problems

## 1.0.5 - 2015-01-28
- Release v1.0.5 / npm@v1.0.5
- **update** rebuild readme
- **fix** tests

## 1.0.4 - 2015-01-25
- Release v1.0.4 / npm@v1.0.4
- **update** docs
- expose regex, add `.regex` method

## 1.0.3 - 2015-01-25
- Release v1.0.3 / npm@v1.0.3
- **update** tests
- **add** more tests
- **fix** lint errors
- **add** tests for `.validate` method
- **update `**.test`, update docs
- **add** docs for `.validate` method
- **add** docs for `.validate` method
- **add** `.validate` method

## 1.0.2 - 2015-01-25
- Release v1.0.2 / npm@v1.0.2
- **update** docs
- **update** tests, update `.test` method
- **update** docs
- **add** new `related` projects
- **add** docs
- **add** tests for `.test` method
- **add** `.test` method
- **add** tests for returning class
- return class instead of just object

## 1.0.1 - 2015-01-23
- Release v1.0.1 / npm@v1.0.1
- remove `kind-of`

## 1.0.0 - 2015-01-23
- Release v1.0.0
- **add** related projects
- **add** docs
- **add** test-case: throw when empty string given

## 0.1.0 - 2015-01-23
- Release v0.1.0 / npm@v0.1.0

## 0.0.0 - 2015-01-22
- first commits