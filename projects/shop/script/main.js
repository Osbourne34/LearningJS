import { databaseEntry } from './database-entry.js';
import Products from './Products.js';

document.addEventListener('DOMContentLoaded', () => {
    // Запись исходных данных в базу данных;
    databaseEntry();

    new Products('products', 'load-more', 12);
})