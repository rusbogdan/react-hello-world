var config = {
    entry: './main.js',
    mode: 'development',

    output: {
      path: __dirname + "/dist/",
      filename: 'index.js'
    },

    devServer: {
        static: {
          directory: __dirname + "/",
        },
        compress: true,
        port: 9000,
      },

    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
  }

  module.exports = config;