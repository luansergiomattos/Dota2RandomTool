import { selectHero } from './heroesStates/selectHero'
import { excludeHero } from './heroesStates/excludeHero'

export function addHeroStateOnClick() {
  const heroes = document.querySelectorAll('[data-hero]');
  const states = {
    selected: '-selected',
    excluded: '-excluded',
    notSelected: '-notSelected'
  }
  
  heroes.forEach(hero => {
    hero.addEventListener('click', () => { selectHero(hero, states) });
    hero.addEventListener('contextmenu', evt => { excludeHero(hero, evt, states) });
  });
}
