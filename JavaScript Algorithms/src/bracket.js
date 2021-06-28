/**
 * bracket matcher => returns unwanted brackets
 * */
function removeBracket(str){
    const newArr = str.match(/\(\)/g); //to return parfect match [ str='()())()' returns [ '()', '()', '()' ] ]

    str = str.replace('()', '');

    if(str.match(/\(\)/g)){
        return removeBracket(str);
    }

    return str; //returns the unwanted bracket
}

//test case
console.log(removeBracket('()())()'));

module.exports = removeBracket;