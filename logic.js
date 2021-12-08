var keys =  [...document.getElementsByTagName('form')[0].getElementsByTagName('input')];//make [0] more defined

var nums = keys.filter(e => e.hasAttribute('class') && e.getAttribute('class')=='num');

var ops = keys.filter(e => e.hasAttribute('class') && e.getAttribute('class')=='operator');

var return_key = keys.filter(e => e.name == 'doit')[0];//should be unique

var display = keys.filter(e => e.id == 'display')[0];//must be unique

var clear_button = keys.filter(e => e.id == 'clear')[0];

nums.forEach(num => num.addEventListener("click", function() {
    display.value += num.value;
}));

ops.forEach(op => op.addEventListener("click", function() {
    switch (op.name) {
        case('times'):
            display.value += '*';
            break;
        case('divide'):
            display.value += '/';
            break;
        default:
            display.value += op.value;
    }
}));

return_key.addEventListener("click", function() {
    let result;
    try {
        result = eval(display.value);
    } catch {
        result = 'ERROR'
    } finally {
        display.value = result;
    }
})

clear_button.addEventListener("click", function() {
    display.value = '';
})