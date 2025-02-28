# getServiceWorker

This package helps to run sensitive code of web application only after
installing and activating `ServiceWorker`, to make sure that all requests
from web application will passed through `ServiceWorker`.

## Features

- installing and activating `ServiceWorker` at the very first time page load
- updating and activating `ServiceWorker`, if update is available, on each page load
- an easy way to get access to the current activated `ServiceWorker`
- successfully handling case when user force reloads page

## Installing

NPM:

```sh
npm install -D getserviceworker
```

PNPM:

```sh
pnpm add -D getserviceworker
```

CDN:

```html
<script type="module">
import getServiceWorker from 'https://unpkg.com/getserviceworker/src/getServiceWorker.js'
// ...
</script>
```

## Usage

```js
import getServiceWorker from 'getserviceworker' // or any other way...

// wait until ServiceWorker were installed and become activated
const activatedServiceWorker = await getServiceWorker('/serviceWorker.js', { type: 'module' })
// now do somethings after installing and activating ServiceWorker...
// e.g. launch the web application
launchApplication(activatedServiceWorker) // all requests from application may be modified by ServiceWorker
```

## License

MIT
