function columns(words) {
    const maxWordLength = Math.max(...words.map(item => item.length));
    let storeUptoMax = new Array(maxWordLength).fill("");

    for (let char = 0; char < maxWordLength; char++) {
        let temp = "";
        for (let word = 0; word < words.length; word++) {
            if (words[word].length > char) {
                temp += words[word][char];
            } else {
                temp += " ";
            }
        }
        storeUptoMax[char] = temp.split('').join(' ');
    }

    const column = storeUptoMax.join('\n');
    console.log(column);
}

module.exports = { columns }

