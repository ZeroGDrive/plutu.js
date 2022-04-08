<h1 align="center">
Plutu-TS
</h1>

<p align="center">
A tiny client for the plutu.ly API written in Typescript.
</p>

<div> 
<a href="https://www.npmjs.com/package/plutu-ts"><img src="https://img.shields.io/npm/v/plutu-ts" alt="plutu-ts"></a>
<a href="https://unpkg.com/plutu-ts"><img src="https://img.badgesize.io/https://unpkg.com/plutu-ts@0.0.2/dist/index.js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/plutu-ts"><img src="https://img.badgesize.io/https://unpkg.com/plutu-ts@0.0.2/dist/index.js?compression=brotli" alt="brotli size"></a>
</div>

## ✨ Features:
- Tiny <1KB size gzip
- Works in Node.js and in Browser
- Built-in Typescript support

## 🔧 Installation

```bash
npm i plutu-ts
```
or
```bash
yarn add plutu-ts
```

## 🌐 Usage

Import `plutu-ts` module in your project and initialize it with your apiKey and access token.

```js
import Plutu from 'plutu-ts'

const PlutuClient = new Plutu({ apiKey: '%apiKey%', accessToken: '%accessToken%' })
```