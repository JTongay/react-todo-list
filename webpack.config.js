var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!sass-loader'
            }
        ]
    }
};
