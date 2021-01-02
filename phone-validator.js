function telephoneCheck(str) {
    str = str.split('');
    // check min length phone number
    if (str.length < 10) {
        //console.log('phone invalid!');
        return false;
    } else if (str.indexOf('?') !== -1 || str.indexOf('*') !== -1) { // check special chars
        return false;
    } else if (str[0] > 0 || str[0] == '(') {
        if (str[0] == 1) {
            str.shift();
        }

        str = str.join('');
        var re = /[- ]/g;
        str = str.replace(re, '');
        if (str.length % 2 == 0) {
            if (str.indexOf(')') > 4) {
                return false;
            }
            re = /[()]/g;
            str = str.replace(re, '');
            if (str.length == 10) {
                console.log('phone OK!');
                return true;
            } else {
                //console.log('phone invalid!');
                return false;
            }
        } else {
            //console.log('phone invalid!');
            return false;
        }
    } else {
        //console.log('phone invalid!');
        return false;
    }

}

telephoneCheck("(605)4756961");
telephoneCheck("2(757)6227382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("123**&!!asdf#");
telephoneCheck("(555-555-5555");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("(6054756961)");
telephoneCheck("555-5555")
telephoneCheck("1 555-555-5555");
telephoneCheck("5555555555");