# typecatch

Simple TypeScript tryCatch util function for both sync and async

## Installation

```sh
npm i typecatch
```

## Usage

```ts
import { tryCatch } from "typecatch";

// function:
const { data, error } = tryCatch(() => JSON.parse(/* ... */));

// promise:
const { data, error } = await tryCatch(fetch(/* ... */));
```
