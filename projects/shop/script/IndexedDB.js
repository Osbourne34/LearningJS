export default class IndexedDB {
    static init() {
        return new Promise((res, rej) => {
            const openRequest = indexedDB.open('Shop', 1);

            openRequest.onupgradeneeded = function (e) {
                const db = e.target.result;

                if (!db.objectStoreNames.contains('products')) {
                    db.createObjectStore('products', {
                        keyPath: 'id',
                        autoIncrement: true
                    })
                }
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', {
                        keyPath: 'login'
                    })
                }
            }

            openRequest.onsuccess = function (e) {
                res(e.target.result);
            }

            openRequest.onerror = function (e) {
                rej(e.target.result);
            }
        })
    }

    static async setItems(storeName, data) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName, 'readwrite');
            let store = tx.objectStore(storeName);

            data.forEach(element => {
                let req = store.put(element);

                req.onsuccess = function (e) {
                    res(e.target.result);
                }
                req.onerror = function (err) {
                    rej(err);
                }
            });
        })
    }

    static async setItem(storeName, data) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName, 'readwrite');
            let store = tx.objectStore(storeName);

            let req = store.add(data);

            req.onsuccess = function (e) {
                res(e.target.result);
            }
            req.onerror = function (err) {
                rej(err);
            }
        })
    }

    static async getItem(storeName, key) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName);
            let store = tx.objectStore(storeName);

            let req = store.get(key);

            req.onsuccess = function (e) {
                res(e.target.result);
            }
            req.onerror = function (err) {
                rej(err);
            }
        })
    }

    static async getItems(storeName) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName);
            let store = tx.objectStore(storeName);

            let req = store.getAll();

            req.onsuccess = function (e) {
                res(e.target.result);
            }
            req.onerror = function (err) {
                rej(err);
            }
        })
    }

    static async deleteItem(storeName, key) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName, 'readwrite');
            let store = tx.objectStore(storeName);

            let req = store.delete(key);

            req.onsuccess = function (e) {
                res(e.target.result);
            }
            req.onerror = function (err) {
                rej(err);
            }
        })
    }

    static async clear(storeName) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName, 'readwrite');
            let store = tx.objectStore(storeName);

            let req = store.clear();

            req.onsuccess = function (e) {
                res(e.target.result);
            }
            req.onerror = function (err) {
                rej(err);
            }
        })
    }

    static async editing (storeName, data) {
        const db = await this.init();

        return new Promise((res, rej) => {
            let tx = db.transaction(storeName, 'readwrite');
            let store = tx.objectStore(storeName);

            let req = store.put(data);

            req.onsuccess = function (e) {
                res(e.target.result);
            }
            req.onerror = function (err) {
                rej(err);
            }
        })
    }
}