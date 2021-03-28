import React from 'react';
import { heroes } from '../data/heroes';

//#region Filtro por Editorial
//#endregion
export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}

