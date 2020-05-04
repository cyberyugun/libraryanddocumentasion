var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./projects/salt/api/webcomponents/app/components/asset/js/salt.js', './projects/salt/api/webcomponents/app/components/asset/scss/salt.scss'],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "./dist/salt/lib/"),
    filename: 'js/salt.min.js',
    publicPath: "/",
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { 
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        })
      },
      { 
        test: /\.ts(x?)$/,
        exclude: /node_modules/, 
        loader: 'ts-loader'
      }, 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ 
      filename: 'css/salt.min.css',
      allChunks: true,
    }),
    new CopyPlugin([
      { from: 'project/salt/api/webcomponents/app/components/asset/scss', to: 'scss' },
    ]),
  ],
};