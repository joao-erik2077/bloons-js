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
Returns information from all towers
### Params: 
* **onlyId**: boolean *optional* - displays only the id of the towers

## getTower(id)
Returns information from a specific tower
### Params: 
* **id**: string - tower id

## getAllHeroes(onlyId)
Returns information from all heroes
### Params: 
* **onlyId**: boolean *optional* - displays only the id of the heroes

## getHero(id)
Returns information from a specific hero
### Params: 
* **id**: string - hero id

## getAllBloons(onlyId)
Returns information from all bloons
### Params: 
* **onlyId**: boolean *optional* - displays only the id of the bloons

## getBloon(id)
Returns information from a specific bloon
### Params: 
* **id**: string - bloon id

## getTowerImage(towerId, level)
Returns tower image
### Params: 
* **towerId**: string - tower id
* **level**: string - tower level, for the default sprite use 'base', for path evolutions use '001', '002', '020', etc. for paragons forms use 'paragon'

## getHeroImage(heroId, level, skinId)
Returns hero image
### Params: 
* **heroId**: string - hero id
* **level**: string - hero level, use numbers from 1 to 20, but only those where there are changes in the sprite
* **skinId**: string - hero skin id

## getBloonImage(bloonId, type)
Returns bloon image
### Params: 
* **bloonId**: string - bloon id
* **type**: string - bloon type (camo, regrow, camoregrow, fort, fortcamo, fortcamoregrow, fortregrow)