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
        const {
            filename,
            content
        } = file;
        return new Promise((resolve, reject) => {
            try {
                const uglifyOptions = panto.util.extend(true, {
                    compress: true,
                    output: {
                        ascii_only: true,
                        max_line_len: 3000
                    }
                }, this.options.uglifyOptions, {
                    fromString: true
                });

                const result = uglify.minify(content, uglifyOptions);

                resolve(panto.util.extend(file, {
                    content: result.code
                }));
            } catch (err) {
                if (this.options.ignoreError) {
                    panto.log.warn(`UglifyTransform warnning in ${filename}: ${err.message}`);
                    resolve(file);
                } else {
                    reject(err);
                }
            }
        });
    }
}

module.exports = UglifyTransformer;