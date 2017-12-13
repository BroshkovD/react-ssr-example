const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Tell webpack the root file our server app
    entry: './src/client',

    //Tell wepack where to put the output file    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);