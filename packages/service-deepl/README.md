# @theowenyoung/deepl

[![npm-version](https://img.shields.io/npm/v/@theowenyoung/deepl.svg)](https://www.npmjs.com/package/@theowenyoung/deepl)
[![OpenTranslate](https://img.shields.io/badge/OpenTranslate-Compatible-brightgreen)](https://github.com/OpenTranslate)

Deepl translator with [OpenTranslate](https://github.com/OpenTranslate) API.

## Installation

Yarn

```
yarn add @theowenyoung/deepl
```

NPM

```
npm i @theowenyoung/deepl
```

## Usage

```
import Deepl from '@theowenyoung/deepl'

const deepl = new Deepl({
    config: {
      //please refer to https://www.deepl.com/pro.html
      auth_key: ""
    }
  })

deepl.translate('text').then(console.log)
```

## API

See [translator](https://github.com/OpenTranslate/OpenTranslate/blob/master/packages/translator/README.md) for more details.

## Disclaimer

The material and source code from this package are for study and research purposes only. Any reliance you place on such material or source code are strictly at your own risk.
