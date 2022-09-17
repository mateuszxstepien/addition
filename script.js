const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const button = document.getElementById('button');
const sum = document.getElementById('sum');

let fn = () => {
	one = parseInt(numberOne.value);
	two = parseInt(numberTwo.value);
	suma = one + two;
	sum.textContent = `Wynik: ${suma}`;
};

button.addEventListener('click', fn);
input.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		check();
	}
});