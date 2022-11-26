# @theowenyoung/tencent

[![npm-version](https://img.shields.io/npm/v/@theowenyoung/tencent.svg)](https://www.npmjs.com/package/@theowenyoung/tencent)
[![OpenTranslate](https://img.shields.io/badge/OpenTranslate-Compatible-brightgreen)](https://github.com/OpenTranslate)

Tencent translator with [OpenTranslate](https://github.com/OpenTranslate) API.

## Installation

Yarn

```
yarn add @theowenyoung/tencent
```

NPM

```
npm i @theowenyoung/tencent
```

## Usage

```
import Tencent from '@theowenyoung/tencent'

const tencent = new Tencent({
  config: {
    //please refer to https://cloud.tencent.com/document/api/213/30654
    secretId: "",
    secretKey: ""
  }
})

tencent.translate('text').then(console.log)
```

## API

See [translator](https://github.com/OpenTranslate/OpenTranslate/blob/master/packages/translator/README.md) for more details.

## Disclaimer

The material and source code from this package are for study and research purposes only. Any reliance you place on such material or source code are strictly at your own risk.
