const students = [
        {name: "Tanya",
        course: 3,
        subjects: {math: [4, 4, 3, 4],
                   algorithms: [3, 3, 3, 4, 4, 4],
                   data_science: [5, 5, 3, 4]}
        }, 

        {name: "Victor",
        course: 4,
        subjects: {physics: [5, 5, 5, 3],
                   economics: [2, 3, 3, 3, 3, 5],
                   geometry: [5, 5, 2, 3, 5]}
        }, 
        
        {name: "Anton",
        course: 2,
        subjects: {statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
                   english: [5, 3],
                   cosmology: [5, 5, 5, 5]}
        }               ];

 
const getSubjects = (students) => Object.keys(students.subjects).map((el)=> el.replace('_',' ').replace(el[0],el[0].toUpperCase()));
const getAverageMark = (students) =>{let result = Object.values(students.subjects).reduce((a,b)=> [...a,...b])
                                        return (result.reduce((a,b)=> a+b)/result.length).toFixed(2);};
const getStudentInfo = (students) => { let result= {}; Object.assign(result, students); 
                                        result.averageMark = getAverageMark(students);
                                        delete result.subjects;
                                        const organize = object => ({ course: undefined, name: undefined,averageMark: undefined ,...result})
                                        return organize(result);};

const getStudentsNames = (students)=> students.map((el)=> el.name).sort();
const getBestStudent= (students)=> students.map((el)=> getAverageMark(el)).reduce((a,b,i)=>b>a?students[i-1].name:students[i].name);
const calculateWordLetters= (str) => { let result={};
                        str.split('').map((el,i,arr)=> result[el]=arr.filter((n)=> n==el).length);
                        return result;}

const hw = `Функція 1: ${getSubjects(students[0])}</br>
Функція 2: ${getAverageMark(students[0])}</br>
Функція 3: дв.консоль </br>
Функція 4: ${getStudentsNames(students)}</br>
Функція 5: ${getBestStudent(students)}</br>
Функція 6: дв.консоль </br>
`;
document.writeln(hw);   
console.log (hw.replaceAll('</br>',''));

console.warn("Функція 3 :");
console.log(getStudentInfo(students[0]));

console.warn("Функція 6 :");
console.log (calculateWordLetters('тест'));



     