class Student {
        constructor(university, course, fullName) { 
                this.university =university;
                this.course=course;
                this.fullName=fullName;
                this.grade =[];
                this.studentStatus=true;
                }

        getInfo() { return 'Студент '+ this.course+'го курсу '+ this.university+' '+this.fullName;}
        get marks() { return this.studentStatus?this.grade:null;}
        set marks(grade) { 
                if(Number.isInteger(grade) && grade>0 && grade<6 && this.studentStatus ){
                        this.grade.push(grade);
                                }
                }
        getAverageMark(){return Math.round(this.grade.reduce((acc,el)=> acc+el)/this.grade.length);}
        dismiss(){this.studentStatus=false;}
        recover(){this.studentStatus=true;}
      }


// task - 1
let one_student = new Student ('Вищої Школи Психотерапії м.Одеса', 1 , 'Остап Родоманський Бендер');

// task - 2
console.log(one_student.getInfo());

// task - 3, 4
one_student.marks = 3;
one_student.marks = 5;
one_student.marks = 2;
one_student.marks = 5;
one_student.marks = 4;
console.log(one_student.marks);

// task - 5
console.log(one_student.getAverageMark());

// task - 6
one_student.dismiss();
one_student.marks = 1;
one_student.marks = 1;
one_student.marks = 1;
console.log(one_student.marks);

// task - 7
one_student.recover();
one_student.marks = 2;
console.log(one_student.marks);



//Advanced

 class BudgetStudent extends Student {
        constructor(university, course, fullName){
                super(university, course, fullName);
                setInterval(() => this.getScholarship(), 30000);
        }
        
        
        getScholarship(){
                 this.getAverageMark()>=4 && this.studentStatus? 
                 console.log('Ви отримали 1400 грн. стипендії'): 
                 console.log('Студент не отримуе стипендії');
                        }

        
 }

 let two_student = new BudgetStudent ('Вищої Школи Психотерапії м.Київ', 3 , 'Роман Романович Бендер');
 
 //Перевірки
 console.log(two_student.getInfo());
 two_student.marks = 3;
 two_student.marks = 5;
 two_student.marks = 5;
 two_student.marks = 4;
console.log(two_student.marks);
console.log(two_student.getAverageMark());






