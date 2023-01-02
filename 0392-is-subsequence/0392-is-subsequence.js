/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let top = 0
    for(let i =0 ; i < t.length ; i++){
        if(t[i] === s[top]){
            top+=1
        }
    }
    if(top === s.length){
        return true
    }else{
        return false
    }
};