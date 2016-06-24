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

        return new Promise((resolve, reject) => {
            try {
                let ast = uglify.parse(content, panto.util.extend({}, parserOptions, {
                    filename
                }));

                ast.figure_out_scope(true);
                ast.compute_char_frequency(true);
                ast.mangle_names(true);

                const compressor = uglify.Compressor(panto.util.extend({}, compressorOptions, {
                    warnings: !isSlient
                }));

                ast = compressor.compress(ast);

                resolve(panto.util.extend(file, {
                    content: ast.print_to_string(panto.util.extend({
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