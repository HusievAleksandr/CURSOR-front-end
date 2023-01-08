const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// task - 1
function getMyTaxes(salary){
       return (this.tax * salary).toFixed(2);
                        }

console.log('Salary 2000 in Ukraine :  ', getMyTaxes.call(ukraine, 2000));


// task - 2
function getMiddleTaxes(){
        return (this.tax * this.middleSalary ).toFixed(2);
                         }

console.log('Ukraine :  ', getMiddleTaxes.call(ukraine));
console.log('Latvia :  ', getMiddleTaxes.call(latvia))
console.log('Litva :  ', getMiddleTaxes.call(litva))


// task - 3
function getTotalTaxes(){
     return   (this.tax * this.middleSalary * this.vacancies).toFixed(2);
                         }

console.log('Ukraine :  ', getTotalTaxes.call(ukraine));
console.log('Latvia :  ', getTotalTaxes.call(latvia));
console.log('Litva :  ', getTotalTaxes.call(litva));

// task - 4
function getMySalary(country){
        const result ={};

        result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
        result.taxes= Math.round(country.tax*result.salary);
        result.profit = result.salary-result.taxes;    
          
       console.log(result);
}

setInterval(getMySalary, 10000, ukraine);