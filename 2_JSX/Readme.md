# React and JSX

Введение в Webpack

## Создание проекта через утилиту (лекгкий метод):
Утилита создаст шаблон приложения с настроенным по-умолчанию
webpack-проектом
```bash
  npm install -g create-react-app
  create-react-app my-project
```

## Создание проекта напрямую (сложный метод):

### Установка React
```bash
  npm init -y
  npm install React-dom serve
```

### Установка Webpack
```bash
 npm install --save-dev webpack webpack-cli
```

### Установка Babel
1. Устанавливаем базоввые компоненты
2. Устанавливаем модули транспиляциии для ESNuxt и JSX
```bash
 npm install babel-loader @babel/core --save-dev
 npm install @babel/preset-env @babel/preset-react --save-dev
```

### Включение карты исходников
Объеклинение кода в один файл может вызвать проблемы отладки,
чтобы устранить эту проблему - можно включить карту исходников
(source map) - файл, который сопоставляет пакет с исходными файлами.

Для этого в webpack.config.js нужно установить:
```bash
  modules.exports = {
    ...
    devtools: "#source-map"
  }
```

Указние свойства devtools в значение #source-map сообщит webpack,
что нуджно включить сопастволение источников.
После этого в папке dist появится файл bundle.js.map

## Запуск приложения
```bash
  npx webpack --mode development
  npx webpack --mode production
```

Команды можно вынести в package.json файл:
"scripts": {
  "build": "webpack --mode production"
}

После чего можно будет воспользоваться следующей командой:
```bash
  npm run build
```