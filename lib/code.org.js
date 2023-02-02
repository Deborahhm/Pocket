
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

export const getPropertyValue = (id) => {
    const el = document.getElementById(id).value;
        return el; 
}

export const setProperty = (id,  valor) => {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = valor;
    }
}

export const setPropertyValue = (id, valor)=> {
    const el = document.getElementById(id);
    if (el){
        el.value = valor
    }
}

