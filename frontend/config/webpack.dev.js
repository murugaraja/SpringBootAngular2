/* webpack.dev.js */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig.metadata, {
    host: 'localhost',
    port: 3000,
    ENV: ENV,
    HMR: HMR
});

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        sourceMapFilename: '[name].map',
        library: 'ac_[name]',
        libraryTarget: 'var',
    },

    plugins: [
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR
            }
        }),
        
        new webpack.LoaderOptionsPlugin({
          debug: true,
          options: {
            metadata: METADATA,
          }
        }),
    ],

    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },

    node: {
        global: true,
        crypto: false,
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
});
