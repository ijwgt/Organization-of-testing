export default function identifyPaymentSys(input) {
	const firstNum = input.value.charAt(0);
	const secondNum = input.value.charAt(1);
	const visa = document.querySelector('.cards__visa');
	const mastercard = document.querySelector('.cards__mastercard');
	const amex = document.querySelector('.cards__amex');
	const discover = document.querySelector('.cards__discover');
	const mir = document.querySelector('.cards__mir');
	const diners = document.querySelector('.cards__diners');

	visa.classList.remove('disabled');
	mastercard.classList.remove('disabled');
	amex.classList.remove('disabled');
	discover.classList.remove('disabled');
	mir.classList.remove('disabled');
	diners.classList.remove('disabled');

	if (firstNum == 4) {
		mastercard.classList.add('disabled');
		amex.classList.add('disabled');
		discover.classList.add('disabled');
		mir.classList.add('disabled');
		diners.classList.add('disabled');
		input.classList.add('valid');
	} else if (firstNum == 5) {
		visa.classList.add('disabled');
		amex.classList.add('disabled');
		discover.classList.add('disabled');
		mir.classList.add('disabled');
		diners.classList.add('disabled');
		input.classList.add('valid');
	} else if (firstNum == 3 && (secondNum != 0 && secondNum != 6 && secondNum != 8)) {
		visa.classList.add('disabled');
		mastercard.classList.add('disabled');
		discover.classList.add('disabled');
		mir.classList.add('disabled');
		diners.classList.add('disabled');
		input.classList.add('valid');
	} else if (firstNum == 6) {
		visa.classList.add('disabled');
		mastercard.classList.add('disabled');
		amex.classList.add('disabled');
		mir.classList.add('disabled');
		diners.classList.add('disabled');
		input.classList.add('valid');
	} else if (firstNum == 2) {
		visa.classList.add('disabled');
		mastercard.classList.add('disabled');
		amex.classList.add('disabled');
		discover.classList.add('disabled');
		diners.classList.add('disabled');
		input.classList.add('valid');
	} else if (firstNum == 3 && (secondNum == 0 || secondNum == 6 || secondNum == 8)) {
		visa.classList.add('disabled');
		mastercard.classList.add('disabled');
		amex.classList.add('disabled');
		discover.classList.add('disabled');
		mir.classList.add('disabled');
		input.classList.add('valid');
	} else {
		input.classList.add('invalid');
	}
}