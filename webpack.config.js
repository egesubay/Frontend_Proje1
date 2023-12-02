const path = require('path');
var webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
       index : './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/build'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
      ],

};