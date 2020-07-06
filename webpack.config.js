const path = require('path');
const nodeExternals = require('webpack-node-externals');

const babelConf = {
    'presets': [
        [
            '@babel/preset-env',
            {
                'targets': {
                    'node': 'current'
                }
            }
        ]
    ]
}

module.exports = {
    'entry': './src/index',
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './index.js'
    },
    externals: [nodeExternals()],
    target: 'node',
    resolve: {
        'mainFiles': ['index'],
        'extensions': ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConf
                    },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConf
                    }
                ]
            }
        ]
    }
};