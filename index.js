/**
 * Copyright (C) 2016 panto.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[15:49:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

const Transformer = require('panto-transformer');
const uglify = require('uglify-js');

class UglifyTransformer extends Transformer {
    _transform(file) {
        let {
            filename,
            content
        } = file;

        const {
            compressorOptions,
            parserOptions,
            generatorOptions,
            ignoreError,
            isSlient
        } = this.options;

        const extend = panto.util.extend;

        return new Promise((resolve, reject) => {
            try {
                let ast = uglify.parse(content, extend({}, parserOptions, {
                    filename
                }));

                ast.figure_out_scope(true);
                ast.compute_char_frequency(true);
                ast.mangle_names(true);

                const compressor = uglify.Compressor(extend({}, compressorOptions, {
                    warnings: !isSlient
                }));

                ast = compressor.compress(ast);

                resolve(extend(file, {
                    content: ast.print_to_string(extend({
                            ascii_only: true
                        }, generatorOptions)) //result.code
                }));
            } catch (err) {
                if (ignoreError) {
                    if (!isSlient) {
                        panto.log.warn(`UglifyTransform warnning: ${err.message}`);
                    }
                    resolve(file);
                } else {
                    reject(err);
                }
            }
        });
    }
}

module.exports = UglifyTransformer;