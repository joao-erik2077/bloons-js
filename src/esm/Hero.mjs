import fetch from 'node-fetch';

export async function getAllHeroes(onlyId) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/heroes?id=${onlyId}`);
    const data = await response.json();

    return data;
}

export async function getHero(id) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/hero/${id}`);
    const data = await response.json();

    return data;
}
