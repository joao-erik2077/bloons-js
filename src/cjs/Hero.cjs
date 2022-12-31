const fetch = require('./utils.cjs');

module.exports = {
    async getAllHeroes(onlyId) {
        const response = await fetch(`https://statsnite.com/api/btd/v3/heroes?id=${onlyId}`);
        const data = await response.json();
    
        return data;
    },

    async getHero(id) {
        const response = await fetch(`https://statsnite.com/api/btd/v3/hero/${id}`);
        const data = await response.json();
    
        return data;
    }
}