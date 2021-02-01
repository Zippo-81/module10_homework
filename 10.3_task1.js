let num = +prompt('Введите значение','');
let type = typeof(num);

if (type === 'number' && !isNaN(num)) {
    (num % 2 == 0) ? alert('Число четное') : alert ('Число не четное');
} else {
    alert('Упс, кажется, вы ошиблись');
};
