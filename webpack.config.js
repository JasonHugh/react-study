var config = {
   entry: './src/index.js',
	
   output: {
      path:'./dist/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      }]
   },

   watch: true
	
}

module.exports = config;