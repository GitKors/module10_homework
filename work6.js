let arr = [ 1, "notebook", "list", "student", NaN, 1, 194, ];
alert(arr.every(item => item == arr[0]));

//ИЛИ

let arr = [194, 194, 194, 194];
alert(arr.every(item => item == arr[0]));