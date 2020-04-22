"use strict";

/**
 *Функция возвращает верный падеж к слову "рубль"
 * @param {number} num
 * @returns {string}
 */
function getCase(num) {
  let beforeLastDigit = getDigitBeforeLastDigit(num);
  if (beforeLastDigit == 1) {
    return "рублей";
  }
  num = String(num);
  let lastNumber = Number(num.charAt(num.length - 1));
  switch (lastNumber) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return "рублей";
    case 1:
      return "рубль";
    case 2:
    case 3:
    case 4:
      return "рубля";
  }
}

/**
 *Функция возвращает предпослднее число, если есть. Иначе возвращает null.
 * @param {number} num
 * @returns {(number|null)}
 */
function getDigitBeforeLastDigit(num) {
  num = String(num);
  let digit = num.charAt(num.length - 2);
  if (digit !== "") {
    return Number(digit);
  }
  return null;
}

let money = parseInt(prompt("Какую сумму вы хотите положить на счёт?"));
// alert("Ваша сумма " + money + getCase(money) + "успешно зачислена.");
alert(`Ваша сумма ${money} ${getCase(money)} успешно зачислена.`);
