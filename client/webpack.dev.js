const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge')



module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        inline: true,
        open: true,
        host: '0.0.0.0',
        port: 9000,
        historyApiFallback: true,
        proxy: {'/api/form' : "http://localhost:3000"}
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
        ]
      }
})
