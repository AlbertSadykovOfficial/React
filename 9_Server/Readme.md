# Серверный рендеринг

Есть несколько способов внедрить серверный рендеринг.
Существует решение от самого React, а так же есть Next и Gatsby.

Next лучше подходит для больших проектов.
Gatsby лучше подходит для небольших проектов.


## Gatsby
Gatsby - генераор сайтов, если нужен блог или сайт со статическим контентом, 
то это то, что надо. 

У Gatsby много полезных функций по-умаолчанию, включая SEO и Роутинг.

### Установка
```shell
  npm install -g gatsby-cli
  gatsby new pets
```

Структура:
  src 
    - componetns
      - layouts.js
      - seo.js
    - images
    - pages
      - index.js
      - 404.js

Пример страницы:
```js
  import React from "react";
  import { Link } from "gatsby";

  import Layout from "../components/Layout"
  import SEO from "../components/seo"

  const ThirdPage = () => (
    <Layout>
      <SEO title="Page three"/>
      <h1>Hi from third page</h1>
      <Link to="/">Home page<Link/>
    </Layout>
  );

  export default ThirdPage;
```
## Next

### Установка
```shell
  mkdir project-next
  cd project-next
  npm init -y
  npm install --save react react-dom next
  mkdir pages
```
Далее помещаем страницы в pages.
Запуск: npm run next

В компонентах, котоырй расположены в pages теперь не надо импортировать
react, достаточно просто вернуть функцию - страницу.

### Концепция общих слоев
Есть компонент - обертка для других компонент, к примеру - у всего приложения
общий заголовк и общее боковое меню - их выносят в обертку.

Layout:
```js
  import Header from "./Header";

  export default function Layout(props) {
    return (
      <div>
        <Header />
        {props.children}
      </div>
    );
  }
```

Использование:
```js
import Layout from "./Layout";

export default function Pets(props) {
  return (
    <Layout>
      <div>
        <h1>Pets!</h1>
        <ul>
          {props.pets.map(pet => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
```

### Динамическая подгрузка данных
Если в компоненте присутсвует функция getInitialProps, Next будет делать каждый раз
на сервере запрос к API.

```js
export default function Pets(props) {
  ...
}

Pets.getInitialProps = async function() {
  const res = await fetch(
    `http://pet-library.moonhighway.com/api/pets`
  );
  const data = await res.json();
  return {
    pets: data
  };
};
```