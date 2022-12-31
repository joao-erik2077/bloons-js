const fetch = require('./utils.cjs');

module.exports = {
    async getAllTowers(onlyId) {
        const response = await fetch(`https://statsnite.com/api/btd/v3/towers?id=${onlyId}`);
        const data = await response.json();
    
        return data;
    },

    async getTower(id) {
        const response = await fetch(`https://statsnite.com/api/btd/v3/tower/${id}`);
        const data = await response.json();
    
        return data;
    }
}