//let masiv = 10;
//   let returnses = solution(masiv);
//
//   function solution(number){
//       let summa= 0;
//       for (i=1 ; i<masiv; i++){
//         if(i %3 === 0 || i%5===0) { summa+=i}
//                }
//      if (summa<0){return 0;} else {return summa;};
//   }
//onsole.log (returnses);
//
//
//
//et text = "4of Fo1r pe6ople g3ood th5e the2";
//rder(text)
//
//unction order(words){
//   let rezult, poisk;
//   for (i=1; i<10; i++){    
//   poisk = words.indexOf(i);
//   rezult += words.slice(poisk,(poisk+i));
//   
//       }
//       console.log (rezult);
// }


// ввод пинкода 
//  let pin = '123245';
//  
//  console.log(validatePIN(pin));
//  console.log(validatePINK(pin));
//  console.log(validatePINKK(pin));
//  
//        
//  function validatePIN (pin) {
//    let kol_simvol = String(pin).length;
//    pin_probel = pin.indexOf(" ");
//    pin_simvol = pin.indexOf(".");
//    if(pin_probel <0 &&  pin_simvol <0 && pin>=0 && typeof Number(pin) === 'number' && (kol_simvol === 4 || kol_simvol === 6)){return true}
//    else {return false}
//
//}
//function validatePINK (pin) {
//    let kol_simvol = String(pin).length;
//    
//    if(/^[0-9]+$/.test(pin) && pin>=0 && (kol_simvol === 4 || kol_simvol === 6)){return true}
//    else {return false}
//}
//
//function validatePINKK (pin) {
//    return /^(\d{4}|\d{6})$/.test(pin)
//}

// среднее символы строки

//let s = "teDxt";
//let g = s.length;
//console.log((g %2 === 0) ? s[(g/2)-1] + s[g/2] : s[(Math.ceil(g/2))-1] );
//
//function getMiddle(s)
//{
//let g = s.length;
// return (g %2 === 0) ? s[(g/2)-1] + s[g/2] : s[(Math.ceil(g/2))-1];
//}

//проверка строки на соответствие окончания 
//let str = 'abcdfr'; 
//let ending='abc';
//console.log(str.endsWith(ending));
//
//function solution(str, ending){
//    return str.endsWith(ending);
//  }

//найти нечетное число
//let masiv =[1,2,2,3,3,3,1,3,3,3,2,2,1];
//
//function findOdd(A) {
// let As = A.sort((a, b) => a - b)
// let povtor = 0;
// let poisk = 1;
// for (i=0; i<As.length;i++){
//     As[i]===As[(i+1)]? poisk +=1 : poisk % 2 ==0 ? poisk =1 :povtor=As[i] ;
// }
//  return povtor;
//    
//  }


//Равные стороны массива
//t masiv =[20,10,-80,10,10,15,35];
//nsole.log(findEvenIndex (masiv));
//
//fnction findEvenIndex(arr)
//   
//   let itog= -1;
//   for (let i = 0; i < arr.length; i++){
//     
//  let result_1 = arr.slice(0).splice(i).reduce((a, b,)=> { return a + b;}, 0);
//  let result_2 = arr.slice(0).splice(0,i+1).reduce((a, b,)=> { return a + b;}, 0);
//  itog = result_1===result_2? i:itog>=0?itog:-1;
//                
//  }
//  return itog; 
//}




//Сумма цифр / цифровой корень
//let a = '';
//console.log(ddd(a));
//
//function ddd(ss){
//let cifra = String(ss);
//let summa;
//for (cifra; cifra.length>1; cifra=String(summa)){
//summa =cifra.split('').reduce((a, b,)=> { return Number(a) + Number(b);}, 0);
//}
//return summa == undefined? 0: summa;
//}

//Подсчет дубликатов

//let Stringa = 'Indivisibilityyy';
//console.log(dublikat(Stringa));
// 
//function dublikat (str){
//    let bezD= str.toLowerCase().split('').filter((x, i) => str.indexOf(x) === i);
//    let rezult= bezD.map((n, i, ns) => {
//    let poisk = str.toLowerCase().split('').filter(el=>el ===n );
//    return poisk.length > 1 ? +1 : 0; });
// return rezult.reduce((a,b)=>{return a+b},0);   
//}



//Найдите выброс четности

//let dano = [0,0,3,0,0] ;
//console.log(findOutlier(dano));
//
//function findOutlier(integers){
//  let chitni = integers.filter((n, i, ns)=> n % 2 ===0); 
//  let nechitni = integers.filter((n, i, ns)=> n % 2 !== 0); 
//  return chitni.length > 1?nechitni[0]: chitni[0] ;
//  }


//Прыгающие мячи

//let h = 30.0;
//let bounce = 1.0;
//let wind = 1.5;
//console.log(bouncingBall(h, bounce, wind));
//
//function bouncingBall(h,  bounce,  wind) {
//    
//    let result = -1; 
//    if (h>0 && bounce<1 && bounce>0 && wind < h){
//    while(h>wind){h=h*bounce; result+=2;}};
//    return result;
//}





//Преобразование RGB в шестнадцатеричный формат
//unction rgb(r, g, b) {
//return [r,g,b].map((n)=> ( (n<0? n=00: n)&& (n>255? n=255: n)).toString(16).padStart(2, '0')).join('').toUpperCase();
//  }
// 
// console.log(rgb(110,272,112));
// console.log(rgb(294,11,124));




//Создать номер телефона
//console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//function createPhoneNumber(numbers){
//    return "(" + numbers.splice(0,3).join('')+ ")"+ " " + numbers.splice(0,3).join('') + "-" + numbers.splice(0,4).join('');
//  }




//Последовательность Трибоначчи - не доделано
//onsole.log(tribonacci([1,1,1], 11));
//unction tribonacci(signature,n){
//    let rezult = [];
//   for (let g=3; g==n ; g++){rezult [g+1]=signature[g-3]+signature[g-2]+signature[g-1]}; 
//   return rezult;  
//   console.log();
// }
 

//N-й Фибоначчи
//console.log(nthFibo(3));
//function nthFibo(n) {
//let fobanaci =[0,1];
//for (let i =1; i < (n-1); i++){fobanaci.push(fobanaci[i]+fobanaci[i-1])};
//return fobanaci[n-1];
//  }




//Настойчивый жук.
//onsole.log(persistence(999));
//unction persistence(num) { 
//   let kol_cikl = 0;
//   let nm =  String(num);     
//   while (nm.length>1){
//   nm = nm.split('').reduce( (x,y) => String(Number(x) * Number(y)));    
//   kol_cikl++;
//   console.log(nm);
//   }
//   return kol_cikl;
//}





//Извлечь доменное имя из URL
//console.log(domainName('http://google.com'));
//function domainName(url){
//    return url.split(/[/ .]/).filter(el => el!='http:' && el!=''&& el!='www'&& el!='https:').shift();
//
//}


//Жадность это хорошо

console.log(score([1, 5, 1, 2, 2,3]));

function score( dice ) {
   let rz= [];
   for (let i =1; i<7; i++){
    let g= dice.filter((n)=>n==i).length;
    rz.push( g>=3 ? i==1 && g==3?i*1000:i==1 && g==4 ?1100:i*100 :g<3 && i==5?i*g*10:g<3 && i==1? i*g*100:0);
    };
   return rz.reduce((a,b)=> a+b);

  

  }
