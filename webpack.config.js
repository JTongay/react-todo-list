const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/Index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src', 'app'),
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
