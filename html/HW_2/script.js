console.warn("Цикли і Розгалуження:");
let N=0, M=0, double_numbers, rezult=0;

do { !Number.isInteger(N)||!Number.isInteger(M)? alert("Введено не коректне число(не ціле) або присутні букви. Введіть коректні дані"):N=0, M=0;
    N = Number(prompt("Введіть ціле число, від якого почнеться додавання"));
    M = Number(prompt("Введіть ціле число, до якого буде додавання"));
    double_numbers= confirm("Щоб пропускаті парні числа тисни OK??");
} while (!Number.isInteger(N)||!Number.isInteger(M));
     
for (let i= N ; i<(M+1) ; i++ ){
          if (double_numbers){i%2?rezult += i: rezult;}
          else{rezult += i;}
      };

console.log(rezult);
document.writeln (`Результат розрахунку === ${rezult}`);
      
     
     