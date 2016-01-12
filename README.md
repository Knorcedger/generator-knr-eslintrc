# generator-knr-eslintrc [![Build Status](https://travis-ci.org/Knorcedger/generator-knr-eslintrc.png?branch=master)](https://travis-ci.org/Knorcedger/generator-knr-eslintrc)

A yeoman generator that adds an eslintrc.js file in your project.  
It uses the [Google Styling Guide](https://github.com/google/eslint-config-google) but changes spaces for tabs (you can set tabs any space size you want ;)).  
You need to use it in a folder that already has a package.json file.  

The .js file is used to be able to add comments etc in further modifications
that be might needed.  

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install generator-knr-eslintrc --save
```

or download it through [Yeoman](http://yeoman.io).

Then, to generate the .eslintrc file in your project use

```sh
yo knr-eslintrc
```

## Tests

```sh
npm install
npm test
```
```

> generator-knr-eslintrc@0.1.0 test /home/knorcedger/dev/generator-knr-eslintrc
> eslint app/

```

## Dependencies

- [yeoman-generator](https://github.com/yeoman/generator): Rails-inspired generator system that provides scaffolding for your apps

## Dev Dependencies

- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
