const getMaxDigit=(number) =>String(number).split('').reduce((a, b) => Number(a) > Number(b) ? a : b);
const powerOfNumber = (x,n)=> {for (let i=1, g=x ;i<n;i++){x=x*g}return x;};
const FormatsTheName= (name) => name[0].toUpperCase()+ name.slice(1).toLowerCase();
const randomInteger = (n,m) => (Math.random() * (m - n) + n).toFixed();
const countLetter = (a, str)=> str.toLowerCase().split('').filter(el=>el ===a ).length;
const getRandomPassword =(num=8) =>{
    let password = '';
    for (let i=1; i <=num; i++)
    {password += (Math.random() * (10 - 1) + 1).toFixed();}
    return password;               };
const deleteLetters = (a,str) => str.replaceAll(a,'');
//const deleteDuplicateLetter = (str)=> str.split('').filter(n,i,ns) => n.length>1;

 


const dz = `Функція 1 Найбільша цифра в цьому числі: ${getMaxDigit(153)}</br>
            Функція 2 Визначає ступінь числа: ${powerOfNumber(5,5)}</br>
            Функція 3 Форматує ім'я: ${FormatsTheName("вЛАД")}</br>
            Функція 5 Повертає випадкове ціле число: ${randomInteger(1,10)}</br>
            Функція 6 Скільки разів певна буква повторюється в слові: ${countLetter('а','Асталавіста')} </br>
            Функція 9-10 Генерація випадкового паролю: ${getRandomPassword(4)}</br>
            Функція 11 Видаляє всі букви з речення: ${deleteLetters("a","blablabla")}</br>
            Функція 13 Видолити букви, які зустрічаються більше 1 разу: </br>
            `;


console.log (dz.replaceAll('</br>',''));
document.writeln(dz);





     