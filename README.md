# easy-try-catch

Simple tryCatch util function for both sync and async

## Usage

```sh
npm i easy-try-catch
```

or

```sh
yarn add easy-try-catch
```

## Examples

```js
// sync
const str = "https://example.com";
const [url, error] = tryCatch(() => new URL(str));

if (!error) {
  link.href = url;
} else {
  console.error(error);
}

// async
const [data, error] = await tryCatch(fetch("https://api.example.com"));

let response;

if (!error) {
  response = await data.json();
} else {
  alert(error);
}
```
