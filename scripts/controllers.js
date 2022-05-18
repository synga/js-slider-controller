const root = document.documentElement;
const gap_size = document.querySelector('#gap-size');
const border_radius = document.querySelector('#border-radius');
const text_size = document.querySelector('#text-size');
const title_size = document.querySelector('#title-size');
const image_width = document.querySelector('#image-width');
const card_size = document.querySelector('#card-size');
const gradient_direction = document.querySelector('#gradient-direction');

const cssUnitiesMap = new Map([
  ['gap-size', 'px'],
  ['border-radius', 'px'],
  ['text-size', 'px'],
  ['title-size', 'px'],
  ['image-width', '%'],
  ['card-size', 'px'],
  ['gradient-direction', 'deg'],
]);

const changeCSSProperty = (event) => {
  root.style.setProperty(
    `--${event.target.id}`,
    `${event.target.value}${cssUnitiesMap.get(event.target.id)}`
  );
};

export const createSlidersEvents = () => {
  gap_size.addEventListener('input', changeCSSProperty);
  border_radius.addEventListener('input', changeCSSProperty);
  text_size.addEventListener('input', changeCSSProperty);
  title_size.addEventListener('input', changeCSSProperty);
  image_width.addEventListener('input', changeCSSProperty);
  card_size.addEventListener('input', changeCSSProperty);
  gradient_direction.addEventListener('input', changeCSSProperty);
};
