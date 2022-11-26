# @theowenyoung/google

[![npm-version](https://img.shields.io/npm/v/@theowenyoung/google.svg)](https://www.npmjs.com/package/@theowenyoung/google)
[![OpenTranslate](https://img.shields.io/badge/OpenTranslate-Compatible-brightgreen)](https://github.com/OpenTranslate)

Google translator with [OpenTranslate](https://github.com/OpenTranslate) API.

## Installation

Yarn

```
yarn add @theowenyoung/google
```

NPM

```
npm i @theowenyoung/google
```

## Usage

```
import Google from '@theowenyoung/google'

const google = new Google({
  order: ['com', 'cn'],
  // search all at the same time
  concurrent: true,
  // googleapi as fallback
  apiAsFallback: true
})

google.translate('text').then(console.log)
```

## API

See [translator](https://github.com/OpenTranslate/OpenTranslate/blob/master/packages/translator/README.md) for more details.

## Disclaimer

The material and source code from this package are for study and research purposes only. Any reliance you place on such material or source code are strictly at your own risk.
