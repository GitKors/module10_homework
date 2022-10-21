const x = prompt('Введите символ')

if (typeof +x == 'number' && !isNaN(x)) {
	console.log(x + ' - это число');
} else if (x == 'true' || x == 'false') {
	console.log(x + ' - это логический тип');
} else if (typeof x == 'string') {
	console.log(x + ' - это строка');
} else {
	console.log('тип x не определен');
}
  