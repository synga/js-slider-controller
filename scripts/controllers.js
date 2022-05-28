/**
 * Referencia da root do document, onde são guardadas as variaveis de CSS
 */
const root = document.documentElement;
/**
 * Referencias dos elementos de range slider, que receberão o evento que altera as propriedades de CSS
 */
const gap_size = document.querySelector('#gap-size');
const border_radius = document.querySelector('#border-radius');
const text_size = document.querySelector('#text-size');
const title_size = document.querySelector('#title-size');
const image_width = document.querySelector('#image-width');
const card_size = document.querySelector('#card-size');
const gradient_direction = document.querySelector('#gradient-direction');

/**
 * Map que contem a unidade que é manipulada em cada seletor de CSS
 */
const cssUnitiesMap = new Map([
  ['gap-size', 'px'],
  ['border-radius', 'px'],
  ['text-size', 'px'],
  ['title-size', 'px'],
  ['image-width', '%'],
  ['card-size', 'px'],
  ['gradient-direction', 'deg'],
]);

/**
 * Função que vai alterar a propriedade (variavel de CSS) que receber por argumento.
 * No argumento desestruturo para pegar só o target do event que é recebido. Depois, desestruturo o id
 * e value desse target
 */
const changeCSSProperty = ({ target: { id, value } }) => {
  root.style.setProperty(`--${id}`, `${value}${cssUnitiesMap.get(id)}`);
};

/**
 * Adiciona os event listeners em cada range slider, para que a cada mudança, ele execute a função que
 * altera o valor da propriedade de CSS atrelada a cada slider.
 * É adicionado o eventListener no input, que é disparado a cada mudança. O change é disparado apenas
 * quando a mudança é realizada, ou seja, quando o usuario soltar o slider.
 */
export const createSlidersEvents = () => {
  gap_size.addEventListener('input', changeCSSProperty);
  border_radius.addEventListener('input', changeCSSProperty);
  text_size.addEventListener('input', changeCSSProperty);
  title_size.addEventListener('input', changeCSSProperty);
  image_width.addEventListener('input', changeCSSProperty);
  card_size.addEventListener('input', changeCSSProperty);
  gradient_direction.addEventListener('input', changeCSSProperty);
};
