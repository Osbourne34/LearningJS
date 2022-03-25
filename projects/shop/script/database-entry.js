import IndexedDB from './IndexedDB.js';
import { products } from './../db/products.js';

export function databaseEntry() {
    IndexedDB.setItems('products', products);
}