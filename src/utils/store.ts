const saveToStore = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromStore = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item) as T;
    }
    return null;
};

const store = { save: saveToStore, get: getFromStore };

export default store;
