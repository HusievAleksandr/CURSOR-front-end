//et masiv = 10;
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
//nction findEvenIndex(arr)
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

let Stringa = 'abbaaddaabbdd';
 console.log(dublikat(Stringa));

function dublikat (str){
    let rezult;
    return str.split('').map((n, i, ns) => {
                return rezult =  n[i]==n[i+i]?+1:-1;});

 

}



