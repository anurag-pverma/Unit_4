const path = require('path');

module.exports ={
    entry:"./src/index.js",
    watch:true,
    output:{
      path:path.resolve("","build"),
      filename:path.join("bundle.js"),
    },
    mode:"development",
    module:{
      rules: [{ test: /\.css$/, use: ['style-loader','css-loader'] },
          { test: /\.(png|jpe?g|gif)$/i, use: ['file-loader'] }
        ]
  }
}