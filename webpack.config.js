const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
      rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: /node_modules/
          }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    mode: 'development'
}
