// TODO: write code here
import identifyPaymentSys from "./identifyPaymentSys";
import validate from "./validate"

const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', function (event) {
	event.preventDefault();
	validate(input);
	identifyPaymentSys(input);
}
)