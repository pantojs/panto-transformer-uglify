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
            uglifyOptions,
            ignoreError,
            isSlient
        } = this.options;

        return new Promise((resolve, reject) => {
            try {
                const finalUglifyOptions = panto.util.extend({
                    compress: true,
                    output: {
                        ascii_only: true,
                        max_line_len: 3000
                    }
                }, uglifyOptions, {
                    fromString: true,
                    filename // for friendly log
                });

                const result = uglify.minify(content, finalUglifyOptions);

                resolve(panto.util.extend(file, {
                    content: result.code
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