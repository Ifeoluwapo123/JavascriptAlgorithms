//Difficulty --Hard
//Time complexity of O(n) and space complexity of O(n)

var minWindow = function(s , t){
    var map = {};
    var sLen = s.length;
    var tLen = t.length;
    var count = tLen;
    var min = Number.MAX_SAFE_INTEGER;
    var head = 0;
    var left = 0;
    var right = 0;

    if(!sLen || !tLen) return 'false';
    
    //map all t characters to 1
    for(var i = 0; i < tLen; i++){
        if(map[t[i]] === undefined)
            map[t[i]] = 1;
        else map[t[i]]++;
    }


    while(right < sLen){
        //decrement those characters value, for the number of times encountered
        if(map[s[right]] !== undefined){
            if(map[s[right]] > 0) count--
            map[s[right]]--;
        }

        right++;

        while(count === 0){
            if(right - left <  min){
                min = right - left;
                head = left;
            }
            
            if(map[s[left]] !== undefined){
                if(map[s[left]] === 0) count++;
                map[s[left]]++;
            }
           
            left++;
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? '': s.substring(head, head + min);
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
//console.log(minWindow('anlfnugnl','gun'));

