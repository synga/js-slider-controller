import { API_URL } from './env.js';
import { createPokemonCard } from './card.js';
import { createSlidersEvents } from './controllers.js';

document.addEventListener('DOMContentLoaded', createSlidersEvents);

const modal = document.querySelector('.controller-modal');

document.querySelector('#open-modal').addEventListener('click', () => {
  modal.style.display = 'block';
});

document.querySelector('#close-modal').addEventListener('click', () => {
  modal.style.display = 'none';
});

const getPokemonList = () => {
  for (let i = 0; i < 25; i++) {
    const pokemonId = Math.ceil(Math.random() * 898);
    createPokemonCard(`${API_URL}/pokemon/${pokemonId}`);
  }
};

getPokemonList();

function teste() {
  console.log('teste');
}
