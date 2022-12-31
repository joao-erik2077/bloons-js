import fetch from 'node-fetch';

export async function getAllBloons(onlyId) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/bloons?id=${onlyId}`);
    const data = await response.json();

    return data;
}

export async function getBloon(id) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/bloon/${id}`);
    const data = await response.json();

    return data;
}
