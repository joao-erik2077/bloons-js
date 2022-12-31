const BloonsJS = require('./../../src/cjs/index.cjs');

async function testTowers() {
    console.log(await BloonsJS.getAllTowers(true));
    console.log(await BloonsJS.getTower('ninja-monkey'));
    console.log(await BloonsJS.getTowerImage('ninja-monkey', 'paragon'));
}

async function testBloons() {
    console.log(await BloonsJS.getAllBloons(true));
    console.log(await BloonsJS.getBloon('red'));
    console.log(await BloonsJS.getBloonImage('moab'));
}

async function testHeroes() {
    console.log(await BloonsJS.getAllHeroes(true));
    console.log(await BloonsJS.getHero('quincy'));
    console.log(await BloonsJS.getHeroImage('gwendolin', '1', 'harlegwen'));
}


testTowers();
testBloons();
testHeroes();