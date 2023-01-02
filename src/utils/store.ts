type StoreKey = "users"; // to expand on items that can be added to the store

const saveToStore = <T>(key: StoreKey, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromStore = <T>(key: StoreKey): T | null => {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item) as T;
    }
    return null;
};

const removeFromStore = (key: StoreKey) => {
    localStorage.removeItem(key);
};

const store = { save: saveToStore, get: getFromStore, remove: removeFromStore };

export default store;
