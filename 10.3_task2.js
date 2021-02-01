let x = null;

if (typeof(x) === 'boolean') {
    console.log(x + ' - Boolean')
} else if (typeof(x) === 'number') {
    console.log(x + ' - Number')
} else if (typeof(x) === 'string') {
    console.log(x + ' - String')
} else console.log('Тип x не определён');