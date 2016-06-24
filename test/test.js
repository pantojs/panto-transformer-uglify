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
                assert.deepEqual(tfile.content,
                    'function fn(n,e){return{name:n,age:e}}');
                done();
            }).catch(console.error.bind(console));
        });
    });
    describe('.parserOptions', () => {
        it('should failed when strict', done => {
            const file = {
                filename: 'a.js',
                content: '[1,]'
            };
            new UglifyTransformer({
                parserOptions: {
                    strict: true
                }
            }).transform(file).catch(() => {
                done();
            });
        });
    });
    describe('.compressorOptions', () => {
        it('should use "unsafe" to compress "new Object()" to "{}"', done => {
            const file = {
                filename: 'a.js',
                content: 'var a = (new Object())'
            };
            new UglifyTransformer({
                compressorOptions: {
                    unsafe: true
                }
            }).transform(file).then(file => {
                assert.deepEqual(file.content, 'var a={};');
                done();
            });
        });
    });
    describe('.generatorOptions', () => {
        it('should use "comments" to save comments', done => {
            const file = {
                filename: 'a.js',
                content: 'var a =/*Han*/ "国";'
            };
            new UglifyTransformer({
                generatorOptions: {
                    ascii_only: true,
                    comments:true
                }
            }).transform(file).then(file => {
                assert.deepEqual(file.content, 'var a=/*Han*/"\\u56fd";');
                done();
            });
        });
    });
});