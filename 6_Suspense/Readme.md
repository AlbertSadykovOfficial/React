# Suspense

## Обработка состояний.

Для отлова ошибок можно использовать механизм Suspense,
который будет перехватывать события (ошибки) и выводить 
какой-либо компонент. При этом обертку для события можно 
выводить как в корне, так и в каждом отдельном компоненте.


## Отложенная загрузка.
Если приложение очень большое, то заггрузка всех его частей
сразу может быть неоптимальным решением. В таком случае можно
разбить приложение на несколько частей и загружать их по мере
необхожимости. Подгрузка таких компонент произойдет при первом
необходимом вызове.

Пример есть в каталоге Error_n_Lazy, так, компонент с главным
содержимым подгружается только после принятия соглашения.

```js
	const Main = lazy(() => import("./Main"));
```