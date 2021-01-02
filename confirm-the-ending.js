/*Este desafío se puede resolver con el método .endsWith(), 
Pero para el propósito de este desafío, se presenta solucion limpia con JavaScript.*/

// Version sin metodos substring
function confirmEnding(str, target) {
    var txtEnding = [];
    for (let i = 0; i < target.length; i++) {
        var indice = str.length - target.length;
        txtEnding.push(str[indice + i]);
    }
    var result = txtEnding.join('') == target;
    console.log(result);
    return result == true ? true : false;

}
confirmEnding("Abstraction", "action");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "game");
confirmEnding("Connor", "n");
confirmEnding("Congratulation", "on");

// Version con metodo endsWith()
function confirmEnding(str, target) {
    var result = str.endsWith(target);
    return result;
}
confirmEnding("Bastian", "n");

// Version con metodo slice()
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");