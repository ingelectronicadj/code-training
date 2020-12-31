/* Un palíndromo es una palabra u oración que se escribe de la misma manera 
    tanto hacia adelante como hacia atrás, ignorando la puntuación, 
    el caso y el espaciado.*/

function palindrome(str) {
    str = str.toLowerCase();
    var chars = {
        '/': '',
        '(': '',
        ')': '',
        '.': '',
        '_': '',
        ' ': '',
        ',': '',
        '-': ''

    }
    for (var i = 0; i < Object.keys(chars).length; i++) {
        var str_replace = str.replaceAll(Object.keys(chars)[i], Object.values(chars)[i]);
        str = str_replace;
    }
    var rts = [...str].reverse().join('');
    return str == rts;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.")
palindrome("0_0 (: /-\ :) 0-0");