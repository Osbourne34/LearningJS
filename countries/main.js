import { data } from './getdata.js';
import { render } from './render.js';
const countries = document.querySelector('.countries');

render(data, countries);