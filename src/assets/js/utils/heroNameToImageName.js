export function heroNameToImageName(heroName) {
  return heroName.split(" ").join("_").split("'").join("").toLowerCase();
}