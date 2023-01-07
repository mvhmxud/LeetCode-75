var longestPalindrome = function(s) {
    const obj = {}
    let ans = 0;
    
    for(let i = 0; i < s.length; i++){
        const ch = s[i]
        if(!obj[ch]){
            obj[ch] = 1;
        }else{
            obj[ch] = 0;
            ans += 2;
        }
    }
    
    if( ans < s.length ){
        return ans + 1;
    }else{
        return ans;
    }
};