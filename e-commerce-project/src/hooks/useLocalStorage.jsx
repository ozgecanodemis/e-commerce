import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        if (item) {
            try {
                return JSON.parse(item);
            } catch (e) {
                return item;
            }
        } else return initialValue;
    });
    const setValue = (value) => {
        setStoredValue(value);
        if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
        ) {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };
    return [storedValue, setValue];
};

export default useLocalStorage;