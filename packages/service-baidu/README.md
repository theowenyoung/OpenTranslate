# @theowenyoung/baidu

[![npm-version](https://img.shields.io/npm/v/@theowenyoung/baidu.svg)](https://www.npmjs.com/package/@theowenyoung/baidu)
[![OpenTranslate](https://img.shields.io/badge/OpenTranslate-Compatible-brightgreen)](https://github.com/OpenTranslate)

Baidu translator with [OpenTranslate](https://github.com/OpenTranslate) API.

## Installation

Yarn

```
yarn add @theowenyoung/baidu
```

NPM

```
npm i @theowenyoung/baidu
```

## Usage

```
import Baidu from '@theowenyoung/baidu'

//Please refer to http://api.fanyi.baidu.com/api/trans/product/prodinfo
const baidu = new Baidu({
    config: {
        appid: "",
        key: ""
    }
})

baidu.translate('text').then(console.log)
```

## API

See [translator](https://github.com/OpenTranslate/OpenTranslate/blob/master/packages/translator/README.md) for more details.

## Disclaimer

The material and source code from this package are for study and research purposes only. Any reliance you place on such material or source code are strictly at your own risk.
