/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[12:56:09]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const UglifyTransformer = require('../');

describe('panto-transformer-uglify', () => {
    describe('#transform', () => {
        it('should uglify', done => {
            const file = {
                filename: 'a.js',
                content: 'function fn(name, age) {return {name: name, age: age}}'
            };
            new UglifyTransformer().transform(file).then(tfile => {
                assert.deepEqual(tfile.content, 'function fn(n,e){return{name:n,age:e}}');
                done();
            }).catch(console.error.bind(console));
        });
    });
});