var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]] && !tMap[t[i]]) {
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
        } else if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
}