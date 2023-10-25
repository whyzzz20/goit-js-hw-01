"use strict";
function getElementWidth(content, padding, border) {
    const cont = parseFloat(content, 10);
    const pad = parseFloat(padding, 10);
    const bord = parseFloat(border, 10);
    return cont + (pad * 2) + (bord * 2);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
