const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we-re building a bundle for NodeJs
    // rather than for browser
    target: 'node',

    // Tell webpack the root file our server app
    entry: './src/index.js',

    //Tell wepack where to put the output file    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);