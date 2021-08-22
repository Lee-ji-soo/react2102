const path = require("path");
const webpack = require('webpack');

//웹팩 설정
module.exports = {
  name: "worldRelay",
  mode: "development", // 실서비스 : production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./src/client"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["> 1% in KR"] }, //크롬 최신 버전만 호환 ex) browerslist: last 1 version , > 1% , maintained node versions, not dead...
                debug: true,
              },
            ],
            "@babel/preset-react",
          ], //plugins의 모음 = 하나의 preset
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  //연결,

  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })], // 확장 프로그램

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, //출력
};
