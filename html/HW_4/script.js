const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми іструктури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pair_up = boy_girl(students);
const pairs_and_projects = random_command(pair_up, themes);
const student_mark = grades_students(students, marks);
const random_assessment =generate_random_estimates(pairs_and_projects);



function boy_girl (arr){
        let sort =[[],[]];
        let result =[];
        arr.map((el) => el.slice(-1)=='а'? sort[0].push(el):sort[1].push(el));
        for (let i=0; i<sort[0].length; i++){ result.push([sort[1][i],sort[0][i]]) }
        return result;  }

function random_command(student,them){
        let result =[];
        for (let i=0; i<them.length; i++){
          result.push([student[i][0] + ' і ' + student[i][1], them[i]]) ; 
        }
         return result;                }

function grades_students (subscriber, grades){
        let result =[];
        for (let i=0; i<students.length; i++){
          result.push([subscriber[i], grades[i]]) ; 
        }
         return result;                      }

function generate_random_estimates (assessment){
        let result = JSON.parse(JSON.stringify(assessment));
        for (let el of result){
        el.push(Math.random().toFixed(0) * (5 - 1) + 1);
        } return result;
}


const total =`1. Розділ студентів на пари: </br>
                -  ${pair_up[0]} </br>
                -  ${pair_up[1]} </br>
                -  ${pair_up[2]} </br></br>
              2. Пари та теми проєктів: </br>
                - ${pairs_and_projects[0]}</br>
                - ${pairs_and_projects[1]}</br>
                - ${pairs_and_projects[2]}</br></br>
              3. Оцінки зі студентом: </br>
                - ${student_mark[0]}</br>
                - ${student_mark[1]}</br>
                - ${student_mark[2]}</br>
                - ${student_mark[3]}</br>
                - ${student_mark[4]}</br>
                - ${student_mark[5]}</br></br>
              4. Кожній парі випадкову оцінку: </br>
                - ${random_assessment[0]}</br>
                - ${random_assessment[1]}</br>
                - ${random_assessment[2]}</br></br>
`;



console.log (pair_up,pairs_and_projects, student_mark, random_assessment);
document.writeln(total);
