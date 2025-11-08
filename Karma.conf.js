// Karma.conf.js — React + Jasmine + Webpack + Coverage (robusto en Windows)
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
  // con guion bajo
  { pattern: 'src/__test__/**/*_karma.test.js', watched: false },
  { pattern: 'src/__test__/**/*_karma.test.jsx', watched: false },
  // con punto
  { pattern: 'src/__test__/**/*.karma.test.js', watched: false },
  { pattern: 'src/__test__/**/*.karma.test.jsx', watched: false }
],
   preprocessors: {
  // con guion bajo
  'src/__test__/**/*_karma.test.js': ['webpack', 'sourcemap'],
  'src/__test__/**/*_karma.test.jsx': ['webpack', 'sourcemap'],
  // con punto
  'src/__test__/**/*.karma.test.js': ['webpack', 'sourcemap'],
  'src/__test__/**/*.karma.test.jsx': ['webpack', 'sourcemap']
},
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: 'defaults' }],
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ],
                plugins: ['istanbul'] // cobertura real
              }
            }
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.(png|jpg|jpeg|gif|svg)$/i, type: 'asset/resource' }
        ]
      },
      resolve: { extensions: ['.js', '.jsx'] }
    },

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatch: false,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-coverage',
      'karma-sourcemap-loader'
    ]
  });
};
