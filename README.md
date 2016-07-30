# panto-transformer-uglify
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Uglify transformer for panto.

```js
panto.loadTransformer('uglify');

panto.pick('**/*.js').read().uglify({
    parseOptions: {
        strict: true
    },
    compressOptions:{

    },
    ignoreError: true,
    isSlient: true
});
```

## options
 - parserOptions: object, see [here](http://lisperator.net/uglifyjs/parser)
 - compressorOptions: object, see [here](http://lisperator.net/uglifyjs/compress)
 - generatorOptions: object, see [here](http://lisperator.net/uglifyjs/codegen)
 - ignoreError: boolean, if fail when error
 - isSlient: boolean, if log warnning message

[npm-url]: https://npmjs.org/package/panto-transformer-uglify
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-uglify.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-uglify.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-uglify
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-uglify.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-uglify
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-uglify.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-uglify#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-uglify/dev-status.svg
