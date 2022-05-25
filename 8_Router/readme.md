# React Router

Роутер в React не встроен, его нужно устаналвивать, до 6 версии так:
```shell
  npm install react-router@experimental react-router-dom@experimental
```

В целом, все так же как и во Vue.
Роуты можно отображать через компоненты и через хук, передав объект
Outlet - для отображения вложенных роутов.

Общие положения и задание роутера через компонент:
```js
  import { 
    Link
    useLocation,
    useNavigate,
    Outlet,
    Redirect
  } from "react-router-dom";

  function App () {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
          // Other Routes
          <Redirect from="services" to="about/services">
        </Routes>
      </div>
    )
  }

  export function Home () {
    let navigate = useNavigate();
    let location = useLocation();
    console.log(location);
    return (
      <div>
        <h1>
          Resource not found at {location.pathname}
        </h1>
        <Link to="about">About</Link>
        <div onClick={() => navigate(`/${id}`)}>Item { id }</div>
        <Outlet />
      </div>
    )
  } 
```

Задание роутера через хук:
```js
  import { useRoutes } from "react-router-dom";
  ...

  function App() {
    let element = useRoutes([
      { path: "/", element: <Home /> },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "location",
            element: <Location />
          }
        ]
      },
      { path: "*", element: <Whoops404 /> },
      {
        path: "services",
        redirectTo: "about/services"
      }
    ]);
    return element;
  }
```