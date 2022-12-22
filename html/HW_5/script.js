const getRandomArray=(length, min, max) => {
        let arr=[];
        for (let i=0 ;i<length;i++){ arr.push((Math.random() * (max - min) + min).toFixed());}
        return arr;                          };

const getModa=(...numbers) => numbers.reduce((a,b,i,arr,leng =0)=>{
        let current_filter =arr.filter((el)=>el==b).length;
        Number.isInteger(b)&&current_filter>leng?(a=b, leng=current_filter):a;
        return a;                                       },0);
        

const getAverage=(...numbers) => numbers.reduce((a,b)=>Number.isInteger(b)?a+b:a,0)/numbers.length;

const getMedian = (...numbers) => {
        let i = numbers.length/2;
        let resalt =numbers.sort((a,b)=> a-b).filter((el)=> Number.isInteger(el));
        return Number.isInteger(i)?(resalt[i-1]+resalt[i])/2 :resalt[Math.floor(i)];   
                                        };

const filterEvenNumbers =(...numbers)=>numbers.filter((el)=>el%2);
const countPositiveNumbers = (...numbers)=>numbers.filter((el)=> el>0).length;
const getDividedByFive = (...numbers)=> numbers.filter((el)=>!(el%55));

const replaceBadWords= (string,...bad_words)=>{
        return string.split(' ').map((el)=> {
                let words = bad_words.find((n)=> el.includes(n));
                return !!words? el.replace(words,'****'): el}).join(' ');
                                                };

const divideByThree = (word) => {
        let arr=[], str= word.replaceAll(' ','').toLowerCase();
        for (let i=0; i<str.length; i=i+3){        
        arr.push(str.substring(i,i+3));
        }return arr;
                                };
                                
//const generateCombinations= (word)=> word.split('').map((el,i,arr)=>{
//       
//       
//        return arr.reverse();
//});
 


const dz = `Функція 1 : ${getRandomArray(15, 1, 100)}</br>
Функція 2 : ${getModa(6, 2, 55, 11, 78, 2, 55, 77,57, 87, 23, 2, 56, 3, 2)}</br>
Функція 3 : ${getAverage(6, 2, 55, 11, 78, 2, 55, 77,57, 87, 23, 2, 56, 3, 2)}</br>
Функція 4 : ${getMedian(6, 2, 55, 11, 78, 2, 55, 77,57, 87, 23, 2, 56, 3, 2)}</br>
Функція 5 : ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</br>
Функція 6 : ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</br>
Функція 7 : ${getDividedByFive(6, 2,55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</br>
Функція 8 : ${replaceBadWords("Are you fucking kidding?", 'shit','fuck')}</br>
Функція 9 : ${divideByThree("Com   mande   r")}</br>`;
//Функція 10 : ${generateCombinations("man")}</br>
        

           
console.log (dz.replaceAll('</br>',''));
document.writeln(dz);





     