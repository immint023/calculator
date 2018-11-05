
// using addEventListener
var table = document.getElementById('table');
var textview = document.getElementById('textview');
var equal = document.getElementById('equal');


table.addEventListener('click', onClick);
equal.addEventListener('click', sum);

function onClick (event) {
	var listNumber = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', '-', '÷', '+', '.'];
	var value = event.target.value;
	if (listNumber.indexOf(value) !== -1) {
		textview.value += value;
	} else if (value === 'C') {
		textview.value = '';
	} else if (value === '%' && typeof JSON.parse(textview.value) === 'number') {
		console.log(JSON.parse(textview.value));
		textview.value = JSON.parse(textview.value) / 100;
	}
}

function sum () {
	var value = textview.value;
	var newValue = value.replace('x', '*').replace('÷', '/');
	if (newValue !== '') {
		document.getElementById('textview').value = eval(newValue);
	} else {
		return value;
	}
}





