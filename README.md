# easy-try-catch

Simple tryCatch util function for both sync and async

## Installation

```sh
npm i easy-try-catch
```

## Usage

### Function:

```js
const { data, error } = tryCatch(() => JSON.parse(/* ... */));
```

### Promise

```js
const { data, error } = await tryCatch(fetch(/* ... */));
```
