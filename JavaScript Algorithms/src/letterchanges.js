/**
 * check each character then replace with the next alphabelt, if z return A
 * and invert all vowel letters to uppercase 
 */
function Letterchanges(str){
    //return String.fromCharCode('a'.charCodeAt()+1)
    var converted = str.replace(/[a-z]/g, char =>{
        return (char === 'z' || char === 'Z') ? 'a': String.fromCharCode(char.charCodeAt()+1);
    });

    var capitalized = converted.replace(/a|e|i|o|u/gi, (vowel)=>{
        return vowel.toUpperCase();
    });

    return capitalized;
}

console.log(Letterchanges('zwealth'));

module.exports = Letterchanges;