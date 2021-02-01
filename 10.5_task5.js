let mas = ['Yurkov','Roman', 39, true];
console.log(`Кол-во элементов в массиве: ${mas.length}`);

let res = mas.map(function(item, number) {
    console.log(`Элемент ${number}: ${item}`);
});
