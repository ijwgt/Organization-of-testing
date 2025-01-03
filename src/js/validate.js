export default function validate(input) {

	const cardsNumberArray = input.value.split('').map(Number.parseFloat);

	const evenNumbersArray = cardsNumberArray.filter(function (num, index) { return index % 2 !== 0 });
	const oddNumbersArray = cardsNumberArray.filter(function (num, index) { return index % 2 === 0 });
	if (cardsNumberArray.length % 2 === 0) {
		const countNums = [];
		for (let i = 0; i < evenNumbersArray.length; i++) {
			let productNums = evenNumbersArray[i] * 2;
			if (productNums > 9) {
				let res = productNums.toString().split('').map(numStr => parseInt(numStr));
				countNums.push(...res);
			} else {
				countNums.push(productNums);
			}
		}
		const arrs = [...countNums, ...oddNumbersArray];
		const sumArr = arrs.reduce(function (sum, num) {
			return sum + num;
		}, 0);
		console.log(sumArr)
	} else if (cardsNumberArray.length % 2 !== 0) {
		const countNums = [];
		for (let i = 0; i < oddNumbersArray.length; i++) {
			let productNums = oddNumbersArray[i] * 2;
			if (productNums > 9) {
				let res = productNums.toString().split('').map(numStr => parseInt(numStr));
				countNums.push(...res);
			} else {
				countNums.push(productNums);
			}
		}
		const arrs = [...countNums, ...evenNumbersArray];
		const sumArr = arrs.reduce(function (sum, num) {
			return sum + num;
		}, 0);
		console.log(sumArr);
	}
}
// 5536913843636420 почему-то получается "71".

// 	Если количество цифр в номере нечётное, то начинаем с первой цифры слева и проверяем каждую третью цифру (1, 3, 5, 7, 9 и т.д.).
// Если количество цифр чётное, то начинаем со второй цифры слева и проверяем каждую вторую цифру (2, 4, 6, 8 и т.д.).
// Обработка цифр:
// Умножаем каждую проверяемую цифру на 2, если её позиция является нечётной.
// Если произведение больше 9, то заменяем его суммой его цифр (например, 12 заменяем на 1 + 2 = 3).
// Если произведение не больше 9, оставляем его без изменений.
// Суммирование:
// Складываем все цифры, полученные на предыдущем этапе.
// Проверка кратности:
// Проверяем, делится ли сумма из предыдущего шага на 10 без остатка. Если делится, то номер считается корректным по алгоритму Луна.