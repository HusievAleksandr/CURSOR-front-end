const getMaxDigit=(number) =>String(number).split('').reduce((a, b) => Number(a) > Number(b) ? a : b);
const powerOfNumber = (x,n)=> {for (let i=1, g=x ;i<n;i++){x=x*g}return x;};
const formatsTheName= (name) => name[0].toUpperCase()+ name.slice(1).toLowerCase();
const amountAfterTaxes = (salary,...rest) => salary*((100-(rest.reduce((a,b)=> a+b)))/100) ;
const randomInteger = (n,m) => (Math.random() * (m - n) + n).toFixed();
const countLetter = (a, str)=> str.toLowerCase().split('').filter(el=>el ===a ).length;

const currencyExchange = function (money) {
        if(money.includes('$') || money.toUpperCase().includes('UAN'))  
        {return money.includes('$') ? money.replaceAll('$','')*25 +'UAN' : money.toUpperCase().replaceAll('UAN','')/25 +'$'}
        else { return money = 'Введено некоректне значення валюти!';  alert ('Введено некоректне значення валюти')}
                                            }; 

const getRandomPassword =(num=8) =>{
        let password = '';
        for (let i=1; i <=num; i++)
        {password += (Math.random() * (9 - 1) + 1).toFixed();}
        return password;               };

const deleteLetters = (a,str) => str.replaceAll(a,'');

const isPalyndrom = (str )=> {let stringa = str.toLowerCase().replaceAll(' ','');
                        return stringa == stringa.split('').reverse().join('');     }

const deleteDuplicateLetter = (str)=> {
            let stringa ="";
            str.toLowerCase().split('').map((n,i,ns)=>
            { if (ns.filter((el)=> el==n).length==1){stringa += n}});
            return stringa;             }
    

 


const dz = `Функція 1 Найбільша цифра в цьому числі: ${getMaxDigit(153)}</br>
            Функція 2 Визначає ступінь числа: ${powerOfNumber(5,5)}</br>
            Функція 3 Форматує ім'я: ${formatsTheName("вЛАД")}</br>
            Функція 4 Сума після оплати податку: ${amountAfterTaxes(1000,18,1.5)}</br>
            Функція 5 Повертає випадкове ціле число: ${randomInteger(1,10)}</br>
            Функція 6 Скільки разів певна буква повторюється в слові: ${countLetter('а','Асталавіста')} </br>
            Функція 7-8 Конвертує долари в гривні та навпаки: ${currencyExchange('2500uAn')} </br>
            Функція 9-10 Генерація випадкового паролю: ${getRandomPassword(4)}</br>
            Функція 11 Видаляє всі букви з речення: ${deleteLetters("a","blablabla")}</br>
            Функція 12 Чи є слово паліндромом: ${isPalyndrom("Я несу гусеня")}</br>
            Функція 13 Видолити букви, які зустрічаються більше 1 разу: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} </br>
            `;


console.log (dz.replaceAll('</br>',''));
document.writeln(dz);





     