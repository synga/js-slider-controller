import { API_URL, POKEMON_COUNT } from './env.js';
import { createPokemonCard } from './card.js';
import { createSlidersEvents } from './controllers.js';
import { createModalListeners } from './modal.js';

/**
 * Ao carregar o conteudo da DOM, cria os listeners de sliders e modal.
 */
document.addEventListener('DOMContentLoaded', () => {
  createSlidersEvents();
  createModalListeners();
});

/**
 * IIFE que inicializa a aplicação;
 * Como quero fazer apenas 25 cards, crio um for simples. A cada iteração ele gera um id randomico entre
 * 1 e o numero maximo, depois chama a função que cria o card de pokemon passando a url com o ID do
 * pokemon randomico.
 */
(function () {
  for (let i = 0; i < 25; i++) {
    const pokemonId = Math.ceil(Math.random() * POKEMON_COUNT);
    createPokemonCard(`${API_URL}/pokemon/${pokemonId}`);
  }
})();
