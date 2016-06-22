# panto-transformer-uglify

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

uglify transformer for panto.

```js
panto.loadTransformer('uglify');

panto.pick('**/*.js').pipe(panto.read()).pipe(panto.uglify({
    uglifyOptions: {
        compress: true
    }
})).end();
```

## options
 - uglifyOptions: object, see [UglifyJS2](https://github.com/mishoo/UglifyJS2)
 - ignoreError: boolean, if fail when error

[npm-url]: https://npmjs.org/package/panto-transformer-uglify
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-uglify.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-uglify.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-uglify
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-uglify.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-uglify#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-uglify/dev-status.svg
