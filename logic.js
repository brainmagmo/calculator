var keys = [...document.getElementsByTagName('form')[0].getElementsByTagName('input')];//make [0] more defined

function addListenerToKeys(key) {
    switch (key.name) {
        case ('times'):
            key.addEventListener("click", function () {
                display.value += '*';
            })
            break;
        case ('divide'):
            key.addEventListener("click", function () {
                display.value += '/';
            })
            break;
        case ('plus'):
            key.addEventListener("click", function () {
                display.value += '+';
            })
            break;
        case ('minus'):
            key.addEventListener("click", function () {
                display.value += '-';
            })
            break;
        case ('clear'):
            key.addEventListener("click", function () {
                display.value = '';
            })
            break;
        case ('return'):
            key.addEventListener("click", function () {
                let result;
                try {
                    result = eval(display.value);
                } catch {
                    result = 'ERROR'
                } finally {
                    if (isNaN(result)) {
                        result = 'ERROR'
                    };
                    display.value = result;
                }
            });
            break;
        default:
            key.addEventListener("click", function () {
                display.value += key.value;
            });
    }
}

keys.forEach(addListenerToKeys);
