// Convierte el número dado en un número romano.
// Caso max 3999

var roman = [{ // - Thousands
        '3': 'MMM',
        '2': 'MM',
        '1': 'M'
    },
    { // - hundreds
        '9': 'CM',
        '8': 'DCCC',
        '7': 'DCC',
        '6': 'DC',
        '5': 'D',
        '4': 'CD',
        '3': 'CCC',
        '2': 'CC',
        '1': 'C',
        '0': ''
    },
    { // - tens
        '9': 'XC',
        '8': 'LXXX',
        '7': 'LXX',
        '6': 'LX',
        '5': 'L',
        '4': 'XL',
        '3': 'XXX',
        '2': 'XX',
        '1': 'X',
        '0': ''
    },
    { // units
        '9': 'IX',
        '8': 'VIII',
        '7': 'VII',
        '6': 'VI',
        '5': 'V',
        '4': 'IV',
        '3': 'III',
        '2': 'II',
        '1': 'I',
        '0': ''
    }
];

function convertToRoman(num) {
    var index_num = num.toString().split('');
    //console.log(index_num);
    switch (index_num.length) {
        case 4:
            //console.log("numero de 4 cifras");
            num = roman[0][index_num[0]];
            num += roman[1][index_num[1]];
            num += roman[2][index_num[2]];
            num += roman[3][index_num[3]];
            break;
        case 3:
            //console.log("numero de 3 cifras");
            num = roman[1][index_num[0]];
            num += roman[2][index_num[1]];
            num += roman[3][index_num[2]];
            break;
        case 2:
            //console.log("numero de 2 cifras");
            num = roman[2][index_num[0]];
            num += roman[3][index_num[1]];
            break;
        case 1:
            //console.log("numero de 1 cifras");
            num = roman[3][index_num[0]];
            break;

    }
    console.log(num);
    return num;
}

convertToRoman(9);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(83);
convertToRoman(99);
convertToRoman(400);
convertToRoman(798);
convertToRoman(1000);
convertToRoman(3999);