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
    },

    async getHeroImage(heroId, level, skinId) {
        const hero = await this.getHero(heroId);

        if (!level || level === undefined || level == 1) level = 'hero';
        if (level != 'hero' && !hero.skinChange.includes(level)) return new Error('Invalid hero level');

        if (skinId)
            var image = `https://statsnite.com/images/btd/heroes/${heroId}/${skinId}/${level}.png`;
        else
            var image = `https://statsnite.com/images/btd/heroes/${heroId}/${level}.png`;
        
        const response = await fetch(image);

        if (response.ok)
            return image;
        else
            return new Error('Image not found');
    }
}