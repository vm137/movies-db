let path = require('path');

module.exports = env => {
    console.log('env: ', env);

    return {
        entry: path.resolve(__dirname, 'src/client/index'),
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'public')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                },
                {
                    test: /(\.css)$/,
                    loaders: ['style-loader', 'css-loader']
                }
            ]
        },
        mode: (env === 'prod') ? 'production' : 'development'
    };
};
