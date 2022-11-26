# @theowenyoung/languages

[![npm-version](https://img.shields.io/npm/v/@theowenyoung/languages.svg)](https://www.npmjs.com/package/@theowenyoung/languages)
[![OpenTranslate](https://img.shields.io/badge/OpenTranslate-Compatible-brightgreen)](https://github.com/OpenTranslate)

Shared language identifiers and locales for [OpenTranslate](https://github.com/OpenTranslate) projects.

## Usage

### Install

Yarn

```
yarn add @theowenyoung/languages
```

NPM

```
npm i @theowenyoung/languages
```

### Import

CommonJS

```js
const { languages } = require("@theowenyoung/languages");
const en = require("@theowenyoung/languages/locales/en");
const zhCN = require("@theowenyoung/languages/locales/zh-CN");
const zhTW = require("@theowenyoung/languages/locales/zh-TW");
```

TypeScript (with `resolveJsonModule` enabled)

```ts
import { languages } from "@theowenyoung/languages";
import en from "@theowenyoung/languages/locales/en.json";
import zhCN from "@theowenyoung/languages/locales/zh-CN.json";
import zhTW from "@theowenyoung/languages/locales/zh-TW.json";
```

### API

```ts
const langCode = languages[0];
console.log(langCode); //af
console.log(zhCN[langCode]); //南非荷兰语
console.log(en["en"]); //English
```
