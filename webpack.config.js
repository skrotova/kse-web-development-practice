const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = (env) => {
  return {
    entry: '/src/index.js',
    mode: 'development',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
            }
          }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html'
        }),
        new ESLintPlugin({
            exclude: ['node_modules', 'dist'],
            context: path.resolve(__dirname, 'src')
          })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: false,
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
      }
    }
}