const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

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
              },
            ],
            "@babel/preset-react",
          ], //plugins의 모음 = 하나의 preset
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  //연결,

  plugins: [new RefreshWebpackPlugin()], // 확장 프로그램

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: '/dist/',
  }, //출력

  devServer: {
    publicPath: '/dist/',
    hot: true,
  },
};
