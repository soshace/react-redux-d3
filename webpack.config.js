module.exports = {
    entry: './app/app.init.tsx',
    output: {
        filename: 'dist/bundle.js',
        path: __dirname,
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
                options: {
                    configFileName: 'tsconfig.json'
                }
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        compress: true,
        port: 8001
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'source-map'
};