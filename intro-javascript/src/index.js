import { heroes } from './data/heroes';

const findHero = heroes.find(element => element.id === 3);
const getHero = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


console.log(heroes);
console.log(findHero);
console.log(getHero(2));
console.log(getHeroByOwner('DC'));