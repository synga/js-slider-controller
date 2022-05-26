import { API_URL } from './env.js';
import { createPokemonCard } from './card.js';
import { createSlidersEvents } from './controllers.js';

document.addEventListener('DOMContentLoaded', createSlidersEvents);

/**
 * Quantidade de pokémons existentes
 */
const POKEMON_COUNT = 898;

const modal = document.querySelector('.controller-modal');

document.querySelector('#open-modal').addEventListener('click', () => {
  modal.style.display = 'block';
});

document.querySelector('#close-modal').addEventListener('click', () => {
  modal.style.display = 'none';
});

/**
 * IIFE que inicializa a aplicação
 */
(function () {
  for (let i = 0; i < 25; i++) {
    const pokemonId = Math.ceil(Math.random() * POKEMON_COUNT);
    createPokemonCard(`${API_URL}/pokemon/${pokemonId}`);
  }
})();
