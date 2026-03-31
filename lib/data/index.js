import bangladeshCharacters from './bangladesh.js'
import cricketCharacters from './cricket.js'
import bollywoodCharacters from './bollywood.js'
import animeCharacters from './anime.js'
import musicCharacters from './music.js'
import sportsCharacters from './sports.js'
import historyCharacters from './history.js'
import superheroCharacters from './superhero.js'

export const ALL_CHARACTERS = [
  ...bangladeshCharacters,
  ...cricketCharacters,
  ...bollywoodCharacters,
  ...animeCharacters,
  ...musicCharacters,
  ...sportsCharacters,
  ...historyCharacters,
  ...superheroCharacters
]

export const CHARACTER_BY_CATEGORY = {
  bangladesh: bangladeshCharacters,
  cricket: cricketCharacters,
  bollywood: bollywoodCharacters,
  anime: animeCharacters,
  music: musicCharacters,
  sports: sportsCharacters,
  history: historyCharacters,
  superhero: superheroCharacters
}

export function getCharactersByCategory(category) {
  return CHARACTER_BY_CATEGORY[category] || ALL_CHARACTERS
}

export function searchCharacter(name) {
  return ALL_CHARACTERS.find(char =>
    char.name.toLowerCase().includes(name.toLowerCase()) ||
    char.banglaName.includes(name)
  )
}

export function getRandomCharacters(category, count = 10) {
  const chars = getCharactersByCategory(category)
  return chars.sort(() => Math.random() - 0.5).slice(0, count)
}

export default ALL_CHARACTERS
