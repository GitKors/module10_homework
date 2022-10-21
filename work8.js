let myMap = new Map();
myMap.set("Alexey", '0');
myMap.set("student", "Korsakov");
myMap.set("Notebook", true);
myMap.set("cat", false);
myMap.forEach(function (value, key) {
	console.log('Ключ = ' + key + ', Значение = ' + value);
});