import getHeroesArray from '../../utils/getHeroesArray'
import clearArray from '../../utils/clearArray' 
import clearStates from '../heroesStates/clearStates' 
import clearTagContainer from '../tagSystem/clearTagContainer'
import clearRandomContainer from '../randomSystem/clearRandomContainer'

export default function clearButton(heroes, filterTags){
  const clearButton = document.querySelector('[data-clear-button');
  
  clearButton.addEventListener('click', () => {
    clearTagContainer();
    clearRandomContainer();
    clearArray(heroes);
    clearArray(filterTags);
    clearStates();
    getHeroesArray(heroes);
  });
}
