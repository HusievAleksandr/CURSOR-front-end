console.warn("Цикли і Розгалуження:");
let N=null, M=null, double_numbers, rezult=0;

do { N = Number(prompt("Введіть ціле число, від якого почнеться додавання"));
    if (!Number.isInteger(N)) {alert("Введено не коректне число(не ціле) або присутні букви. Введіть коректні дані");}    
} while (!Number.isInteger(N));

do { M = Number(prompt("Введіть ціле число, до якого буде додавання. Воно повинно бути більше першого."));
     if (N>=M || !Number.isInteger(M)){alert("Введено не коректне число(не ціле) або присутні букви, перше число більше за друге. Введіть коректні дані");}    
} while (N>=M || !Number.isInteger(M));

double_numbers= confirm("Щоб пропускати парні числа тисни OK??");
     
for (let i= N ; i<(M+1) ; i++ ){
          if (double_numbers){i%2?rezult += i: rezult;}
          else{rezult += i;}
      };

console.log(rezult);
document.writeln (`Результат розрахунку === ${rezult}`);
      
     
     