let numbers = new Map([
    ["hundred", 100],
    ["thousand", 1000],
    ["million", 1000000]
]);

for (let elem of numbers) {
    console.log(`Ключ: ${elem[0]}. Значение: ${elem[1]}.`); 
}