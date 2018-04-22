//находим число
var a = ["rock", "rap", 1, "jazz"];

function show (arr) {
	for (var i=0; i < arr.length; i++) {
	
	 if (typeof arr[i] == "number") {
	 	console.log(arr[i]);
	 }
	}
}
show(a);

//находим строку в массиве

var x = [1, 2, 3, "строка", 5, 6];

function show (arr) {
	for (var i=0; i < arr.length; i++) {
	
	 if (typeof arr[i] == "string") {
	 	alert(arr[i]);
	 	
	}
	}
}
show(x);


//сортировка


var arr = [ 1, 6, 3, 2, 5, 4 ];

function compare (x, y) {
  if (x > y) return 1;
  if (x < y) return -1;
}

arr.sort(compare);

alert(arr);  