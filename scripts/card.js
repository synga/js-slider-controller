/**
 * Referencia ao elemento de container onde serão inseridos cards de pokémon
 */
const POKEMON_CONTAINER = document.querySelector('.pokemon-container');

/**
 * Map contendo as cores de cada tipo
 */
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

/**
 * Função para gerar a cor de fundo. Verifica se existem duas cores no array de types, se sim, gera um
 * gradiente a partir dessas cores. Se não, retorna apenas a cor na primeira posição do array.
 * As cores são selecionadas em um map que contem a cor de cada tipo.
 */
const generateBackgroundColor = (types) => {
  if (types.length > 1) {
    let gradient = 'linear-gradient(var(--gradient-direction)';
    types.forEach(
      (type) => (gradient = gradient + `, ${pokemonTypesColors.get(type)}`)
    );
    gradient += ')';
    return gradient;
  }
  return pokemonTypesColors.get(types[0]);
};

/**
 * Popula o card com a imagem e titulo dele, depois insere esse card no container onde os cards
 * de pokémon devem ficar
 */
const insertPokemonCard = (pokemonCard, pokemonImage, pokemonName) => {
  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);
  POKEMON_CONTAINER.appendChild(pokemonCard);
};

/**
 * Cria o nome do pokémon e atribui a classede CSS necessária
 */
const createPokemonName = async (name) => {
  const pokemonName = document.createElement('h2');
  pokemonName.innerText = name;
  pokemonName.classList.add('pokemon-card__name');
  return pokemonName;
};

/**
 * Cria a imagem do pokémon e atribui a classe de CSS necessária
 */
const createPokemonSprite = async (image) => {
  const pokemonImage = document.createElement('img');
  pokemonImage.classList.add('pokemon-card__sprite');
  pokemonImage.setAttribute('src', image);
  return pokemonImage;
};

/**
 * Cria o container do card de pokémon e também chama a função que gera a cor de background
 */
const createPokemonContainer = async (types) => {
  const pokemonCard = document.createElement('article');
  pokemonCard.classList.add('pokemon-card');
  pokemonCard.style.background = generateBackgroundColor(types);
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
