const path = require('path');

module.exports = {
    entry: './app/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            [
                                'env',
                                {
                                    modules: false,
                                    targets: {
                                        browsers: [
                                            'last 2 versions',
                                            'ie >= 11',
                                        ],
                                    },
                                },
                            ],
                            'stage-2',
                            'react',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
