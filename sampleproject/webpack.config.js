var path = require('path');

module.exports = {

    devServer: {
        
        //contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,       
        port: 9000
      },
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: "babel-loader"
                  }           
            },
            {
                test: /\.css$/,                
                use: [
                    'style-loader','css-loader'
                ]                 
            }
        ]
    }
};