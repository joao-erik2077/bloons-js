const fetch = require('./utils.cjs');

module.exports = {
    async getAllBloons(onlyId) {
        const response = await fetch(`https://statsnite.com/api/btd/v3/bloons?id=${onlyId}`);
        const data = await response.json();
    
        return data;
    },

    async getBloon(id) {
        const response = await fetch(`https://statsnite.com/api/btd/v3/bloon/${id}`);
        const data = await response.json();
    
        return data;
    }
}