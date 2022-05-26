/**
 * Referencia ao elemento de container onde serão inseridos cards de pokémon
 */
const POKEMON_CONTAINER = document.querySelector('.pokemon-container');

const pokemonTypesColors = new Map([
  ['normal', '#A8A878'],
  ['fighting', '#C03028'],
  ['flying', '#A890F0'],
  ['poison', '#A040A0'],
  ['ground', '#E0C068'],
  ['rock', '#B8A038'],
  ['bug', '#A8B820'],
  ['ghost', '#705898'],
  ['steel', '#B8B8D0'],
  ['fire', '#F08030'],
  ['water', '#6890F0'],
  ['grass', '#78C850'],
  ['electric', '#F8D030'],
  ['psychic', '#F85888'],
  ['ice', '#98D8D8'],
  ['dragon', '#7038F8'],
  ['dark', '#705848'],
  ['fairy', '#EE99AC'],
]);

const generateBackgroundGradient = (types) => {
  let gradient = 'linear-gradient(var(--gradient-direction)';
  types.forEach(
    (type) => (gradient = gradient + `, ${pokemonTypesColors.get(type)}`)
  );
  gradient += ')';
  return gradient;
};

const insertPokemonCard = (pokemonCard, pokemonImage, pokemonName) => {
  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);
  POKEMON_CONTAINER.appendChild(pokemonCard);
};

const createPokemonName = async (name) => {
  const pokemonName = document.createElement('h2');
  pokemonName.innerText = name;
  pokemonName.classList.add('pokemon-card__name');
  return pokemonName;
};

const createPokemonSprite = async (image) => {
  const pokemonImage = document.createElement('img');
  pokemonImage.classList.add('pokemon-card__sprite');
  pokemonImage.setAttribute('src', image);
  return pokemonImage;
};

const createPokemonContainer = async (types) => {
  const pokemonCard = document.createElement('article');
  pokemonCard.classList.add('pokemon-card');
  pokemonCard.style.background =
    types.length > 1
      ? generateBackgroundGradient(types)
      : pokemonTypesColors.get(types[0]);
  return pokemonCard;
};

/**
 * Função que cria todos os elementos que compõe o card e insere esse card na DOM.
 * @param pokemonURL URL para busca de dados do pokémon
 */
export const createPokemonCard = (pokemonURL) => {
  fetch(pokemonURL)
    .then((res) => res.json())
    .then(async (pokemonData) => {
      const pokemon = {
        name: pokemonData.name,
        image: pokemonData.sprites.other['official-artwork'].front_default,
        types: pokemonData.types.map(({ type }) => type.name),
      };

      let pokemonCard = await createPokemonContainer(pokemon.types);
      let pokemonImage = await createPokemonSprite(pokemon.image);
      let pokemonName = await createPokemonName(pokemon.name);
      insertPokemonCard(pokemonCard, pokemonImage, pokemonName);
    });
};
