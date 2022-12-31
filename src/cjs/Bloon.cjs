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
    },

    async getBloonImage(bloonId, type) {
        if (!type || type === undefined) type = 'base';
        const image = `https://statsnite.com/images/btd/bloons/${bloonId}/${type}.png`;
        const response = await fetch(image);

        if (response.ok)
            return image;
        else
            return new Error('Image not found');
    }
}