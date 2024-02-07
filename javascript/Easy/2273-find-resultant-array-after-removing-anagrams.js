/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for(var i=0;i<words.length-1;i++)
    {
        var x=words[i].split("").sort().join("");
        var y=words[i+1].split("").sort().join("");
        if(x==y)
        {
            words.splice(i+1,1)
            i--;
        }
    }
    return words;
};