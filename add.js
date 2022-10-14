const prompt = require ('prompt-sync')();

function addTolist (list) {
    const position = list.length;
    const item = prompt('Digite o novo item da lista');
    list[position] = item;
    console.log(`\n$`)
}

module.exports = addToList;