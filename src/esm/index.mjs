import fetch from 'node-fetch';

async function getAllTowers(onlyId) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/towers?id=${onlyId}`);
    const data = await response.json();

    return data;
}
async function getTower(id) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/tower/${id}`);
    const data = await response.json();

    return data;
}

async function getAllBloons(onlyId) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/bloons?id=${onlyId}`);
    const data = await response.json();

    return data;
}

async function getBloon(id) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/bloon/${id}`);
    const data = await response.json();

    return data;
}

async function getAllHeroes(onlyId) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/heroes?id=${onlyId}`);
    const data = await response.json();

    return data;
}

async function getHero(id) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/hero/${id}`);
    const data = await response.json();

    return data;
}

export default {
    getAllBloons, getAllHeroes, getAllTowers, getBloon, getHero, getTower
} 