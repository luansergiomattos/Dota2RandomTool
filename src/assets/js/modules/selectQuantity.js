import { heroesList } from '../../../data/index'
import { getHeroesArray } from './getHeroesArray'

export function selectQuantity() {
  const quantity = document.querySelector('[data-random-quantity-input]');
  const heroesLength = getHeroesArray(heroesList).map( hero => hero.name).length;

  quantity.max = heroesLength;

  quantity.addEventListener('change', () => {
    if (quantity.value < 1) quantity.value = 0;
    if (quantity.value > heroesLength) quantity.value = heroesLength;
  })
}
