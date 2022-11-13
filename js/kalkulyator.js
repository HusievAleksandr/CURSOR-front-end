   let check, argument_1, argument_2, vivod_na_ekran = document.getElementById("pole_otobrashen") ; 

   //проверка наличия переменной:
   function vibor_argumenta (znachen){
      if (check) {if(argument_2){argument_2 =argument_2+String(znachen.textContent); vivod_na_ekran.innerHTML= argument_1 + check + argument_2;}
                                    else {argument_2 = String(znachen.textContent); vivod_na_ekran.innerHTML= argument_1 + check + argument_2;}

                  }

             else { if(argument_1){argument_1 =argument_1+String(znachen.textContent); vivod_na_ekran.innerHTML= argument_1;}
                                     else {argument_1 =String(znachen.textContent); vivod_na_ekran.innerHTML= argument_1;}
                  }
                                       };

   //проверка чтоб расчет начинался с цифры:
   function vivod_opiraciy (znak){
                           if(argument_1&& check && argument_2) { raschit(); check=znak;}
                           else if (argument_1) {check=znak; vivod_na_ekran.innerHTML= argument_1 + check; }
                           else {vivod_na_ekran.innerHTML= null;check = null;}
                           }

   //выполнение расчета:
   function  raschit (){
                           let rezultat, znachen_1 = Number(argument_1), znachen_2 = Number(argument_2);                          
                           
                           switch(check) {
                              case '+': rezultat=znachen_1 + znachen_2; break;
                              case '-': rezultat=znachen_1 - znachen_2; break;
                              case '*': rezultat=znachen_1 * znachen_2; break;
                              case '/': rezultat=znachen_1 / znachen_2; break;                           
                           }
                           vivod_na_ekran.innerHTML= rezultat;
                           argument_1 = rezultat;
                           argument_2 = null;
                         }

   document.querySelector("#knopks_sbros").onclick = () => { vivod_na_ekran.innerHTML= 0; check = null; argument_1= null; argument_2=null;};
   document.querySelector('#ravno').onclick = () => {if (check){raschit();} else{vivod_na_ekran.innerHTML= null;} };

   let cifra_0 = document.querySelector('#cifra_0'); cifra_0.onclick = () => { vibor_argumenta(cifra_0);}; 
   let cifra_1 = document.querySelector('#cifra_1'); cifra_1.onclick = () => { vibor_argumenta(cifra_1);};
   let cifra_2 = document.querySelector('#cifra_2'); cifra_2.onclick = () => { vibor_argumenta(cifra_2);};
   let cifra_3 = document.querySelector('#cifra_3'); cifra_3.onclick = () => { vibor_argumenta(cifra_3);};
   let cifra_4 = document.querySelector('#cifra_4'); cifra_4.onclick = () => { vibor_argumenta(cifra_4);};
   let cifra_5 = document.querySelector('#cifra_5'); cifra_5.onclick = () => { vibor_argumenta(cifra_5);};
   let cifra_6 = document.querySelector('#cifra_6'); cifra_6.onclick = () => { vibor_argumenta(cifra_6);};
   let cifra_7 = document.querySelector('#cifra_7'); cifra_7.onclick = () => { vibor_argumenta(cifra_7);};
   let cifra_8 = document.querySelector('#cifra_8'); cifra_8.onclick = () => { vibor_argumenta(cifra_8);};
   let cifra_9 = document.querySelector('#cifra_9'); cifra_9.onclick = () => { vibor_argumenta(cifra_9);};
   let cifra_tochka = document.querySelector('#cifra_tochka'); cifra_tochka.onclick = () => { vibor_argumenta(cifra_tochka);};

   document.querySelector('#plus').onclick = () => {znak = "+";  vivod_opiraciy(znak); };
   document.querySelector('#minus').onclick = () => {znak = "-";  vivod_opiraciy(znak); };
   document.querySelector('#delenie').onclick = () => {znak = "/";  vivod_opiraciy(znak); };   
   document.querySelector('#umnohenie').onclick = () => {znak = "*"; vivod_opiraciy(znak); };
   
  





//неудачнfz попытка:


   //let cifra = document.querySelectorAll('.cifra');
   //for (let i = 0; i < cifra.length; i++) {
   //let opit = cifra[i];
   //cifra[i].onclick = () => { let rezult = opit.textContent; console.log(rezult); };
   //};



   //let operaciya = document.querySelectorAll('.operaciya');
   //for (let i = 0; i < operaciya.length; i++) {
   // operaciya[i].onclick = () => { console.log('Вы кликнули по кнопке!'); };
   //};






