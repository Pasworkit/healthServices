 const debounce = (func, timeout) => {
    let timeoutId; 

    return function() {
        const context = this; 
        const args = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => { 
            func.apply(context, args);
        }, timeout);
    };
}

export default debounce;