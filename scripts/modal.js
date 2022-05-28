/**
 * Pegaa referencia da modal de controladores
 */
const modal = document.querySelector('.controller-modal');

/**
 * Função que altera o estado da modal entre display block e none, dependendo
 * do botão que foi clicado.
 */
const toggleModalDisplay = (state) => {
  modal.style.display = state;
};

/**
 * Função que inicializa os listeners dos botões da modal, tanto o que abre quanto o que fecha.
 * É usado um bind para passar o estado do modal no argumento, ja que p bind seta o argumento no this.
 * E assim consigo passar a função direto como callback do listener pra ser executada.
 */
export const createModalListeners = () => {
  document
    .querySelector('#open-modal')
    .addEventListener('click', toggleModalDisplay.bind(null, 'block'));
  document
    .querySelector('#close-modal')
    .addEventListener('click', toggleModalDisplay.bind(null, 'none'));
};
