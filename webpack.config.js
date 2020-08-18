
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {

    entry: './src/index.js',

    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },

    module : {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],

};