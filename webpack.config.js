const path = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV

const config = {
  devtool: env === 'dev' && 'source-map',
  entry: {
    main: env === 'dev' ? [
      'webpack-dev-server/client?http://localhost:8081',
      'webpack/hot/only-dev-server',
      './static/scripts/main'
    ] : [
      './static/scripts/main'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, './static/build/'),
    publicPath: '/build/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass'],
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    env === 'dev' ? new webpack.HotModuleReplacementPlugin() : function(){},
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    })
  ]
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false,
      },
    })
  )
}

module.exports = config
