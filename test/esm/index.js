import BloonsJS from './../../src/esm/index.mjs'

async function testTowers() {
    console.log(await BloonsJS.getAllTowers(true));
    console.log(await BloonsJS.getTower('ninja-monkey'));
}

async function testBloons() {
    console.log(await BloonsJS.getAllBloons(true));
    console.log(await BloonsJS.getBloon('red'));
}

async function testHeroes() {
    console.log(await BloonsJS.getAllHeroes(true));
    console.log(await BloonsJS.getHero('quincy'));
}


testTowers();
testBloons();
testHeroes();