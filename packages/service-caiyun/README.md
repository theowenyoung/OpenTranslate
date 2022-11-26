# @theowenyoung/caiyun

[![npm-version](https://img.shields.io/npm/v/@theowenyoung/caiyun.svg)](https://www.npmjs.com/package/@theowenyoung/caiyun)
[![OpenTranslate](https://img.shields.io/badge/OpenTranslate-Compatible-brightgreen)](https://github.com/OpenTranslate)

caiyun translator with [OpenTranslate](https://github.com/OpenTranslate) API.

## Installation

Yarn

```
yarn add @theowenyoung/caiyun
```

NPM

```
npm i @theowenyoung/caiyun
```

## Usage

```
import Caiyun from '@theowenyoung/caiyun'

const caiyun = new Caiyun({
    config: {
      //please refer to https://fanyi.caiyunapp.com/#/api
      token: ""
    }
  });

caiyun.translate('text').then(console.log)
```

## API

See [translator](https://github.com/OpenTranslate/OpenTranslate/blob/master/packages/translator/README.md) for more details.

## Disclaimer

The material and source code from this package are for study and research purposes only. Any reliance you place on such material or source code are strictly at your own risk.
