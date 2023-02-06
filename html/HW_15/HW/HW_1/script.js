//console.warn("Змінні та типи:");
export function hw_1(){
const apple= 15.678, orange= 123.965, mango= 90.2345; 
const amount = apple+orange+mango;
const random_numbers = (Math.random() * (10 - 1) + 1).toFixed();
const check = Math.round(((amount/100)*(100-random_numbers))*100)/100;
}

module.exports = { hw_1};

//console.log(
//`Максимальне число: ${Math.max(apple,orange,mango)}
//Мінімальне число: ${Math.min(apple,orange,mango)}
//Вартість всіх товарів: ${amount} 
//Ціла частина вартості кожного товару між собою: ${Math.floor(apple) + Math.floor(orange) + Math.floor(mango)}
//Сума товарів округлена до сотень:  ${Math.round(amount/100)*100}
//Булеве значення (парне чи не парне): ${Boolean (Math.floor(amount) % 2) }
//Сума решти, при оплаті всіх товарів купюрою 500: ${(500-amount)}
//Середнє значення цін, округлене до другого знаку після коми: ${Math.round((amount/3)*100)/100}
//Випадкова знижка: ${random_numbers} %
//Випадкова знижка та сума до оплати: ${check} 
//Чистий прибуток, якщо клієнт заплатив зі знижкою: ${(check - (amount/2)).toFixed(2)}`
//                 );
//
// document.writeln(
// `Максимальне число: ${Math.max(apple,orange,mango)}</br>
// Мінімальне число: ${Math.min(apple,orange,mango)}</br>
// Вартість всіх товарів: ${amount} </br>
// Ціла частина вартості кожного товару між собою: ${Math.floor(apple) + Math.floor(orange) + Math.floor(mango)}</br>
// Сума товарів округлена до сотень:  ${Math.round(amount/100)*100}</br>
// Булеве значення (парне чи не парне): ${Boolean (Math.floor(amount) % 2) }</br>
// Сума решти, при оплаті всіх товарів купюрою 500: ${(500-amount)}</br>
// Середнє значення цін, округлене до другого знаку після коми: ${Math.round((amount/3)*100)/100}</br>
// Випадкова знижка: ${random_numbers} %</br> 
// Випадкова знижка та сума до оплати: ${check} </br>
// Чистий прибуток, якщо клієнт заплатив зі знижкою: ${(check - (amount/2)).toFixed(2)}</br>`
//                                     );