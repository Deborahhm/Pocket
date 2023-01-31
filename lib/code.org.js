
export const onEvent = (id, event, fn) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener(event, fn, false);
    }
}; 

export const getProperty = (id) => {
    const el = document.getElementById(id);
        return el;
};

export const setProperty = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) {
        el[prop] = value;
    }
};
