var keys =  [...document.getElementsByTagName('form')[0].getElementsByTagName('input')];//make [0] more defined
//console.log(keys);
var nums = keys.filter(e => e.hasAttribute('class') && e.getAttribute('class')=='num');
//console.log(nums.map(e=>e.getAttribute('value')));
var ops = keys.filter(e => e.hasAttribute('class') && e.getAttribute('class')=='operator');
//console.log(ops.map(e=>e.getAttribute('value')));
var return_key = keys.filter(e => e.name == 'doit')[0];//should be unique
//console.log(return_key.value);
var display = keys.filter(e => e.id == 'display')[0];//must be unique
//console.log(display.value);
var clear_button = keys.filter(e => e.id == 'clear')[0];
//console.log(clear_button.value);
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
    display.value = eval(display.value);
})
clear_button.addEventListener("click", function() {
    display.value = '';
})