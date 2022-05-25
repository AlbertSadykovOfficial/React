var path = require("path");

module.exports = {
  /* Точка входа */
  entry: "./src/index.js",
  
  /* Результат компиляции */
  output: {
    path: path.join(__dirname, "dist", "assets"), /* Куда сохранять билд */
    filename: "bundle.js", /* Выходной JS файл сборки */
  },
  // devtools: "#source-map",
  /* Модули транспиляции */
  module: {
    rules: [
      {
        /* Зпустить babal для всех js файлов, но исключить каталог node_modules */
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            /* Можно вынести в .babalrc */
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      /* Конфигурация сборки стилей */
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
