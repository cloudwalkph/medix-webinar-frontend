var webpack = require('webpack');
var path = require('path');

const config = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "react",
                        "es2015",
                        "stage-0"
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules',
                include: /flexboxgrid/,
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]

}

module.exports = config;