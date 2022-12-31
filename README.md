# bloons-js

# Install
`$ npm install bloons-js --save`

# Use
### Module
```js
import Bloonsjs from 'bloons-js';
```
### CommonJS
```js
const Bloonsjs = require('bloons-js');
```

# Examples
### Module
```js
import Bloonsjs from 'bloons-js';

async function getTowersId() {
    console.log(await BloonsJS.getAllTowers(true));
}
getTowersId();
```
### CommonJS
```js
const Bloonsjs = require('bloons-js');

async function getTowersId() {
    console.log(await BloonsJS.getAllTowers(true));
}
getTowersId();
```

# API

## getAllTowers(onlyId)
Gets information from all towers
### Params: 
* **onlyId**: boolean *optional* - displays only the id of the towers

## getTower(id)
Gets information from a specific tower
### Params: 
* **id**: string - tower id

## getAllHeroes(onlyId)
Gets information from all heroes
### Params: 
* **onlyId**: boolean *optional* - displays only the id of the heroes

## getHero(id)
Gets information from a specific hero
### Params: 
* **id**: string - hero id

## getAllBloons(onlyId)
Gets information from all bloons
### Params: 
* **onlyId**: boolean *optional* - displays only the id of the bloons

## getBloon(id)
Gets information from a specific bloon
### Params: 
* **id**: string - bloon id