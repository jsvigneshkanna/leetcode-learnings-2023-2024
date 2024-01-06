/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.split(" ")
    title.forEach((_, index, __) => {
        title[index] = title[index].length >2 ? changeToCapitalize(title[index].toLowerCase()) : title[index].toLowerCase()
    })
    return title.join(" ")
};

const changeToCapitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
