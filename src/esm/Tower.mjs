import fetch from 'node-fetch';


export async function getAllTowers(onlyId) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/towers?id=${onlyId}`);
    const data = await response.json();

    return data;
}

export async function getTower(id) {
    const response = await fetch(`https://statsnite.com/api/btd/v3/tower/${id}`);
    const data = await response.json();

    return data;
}
