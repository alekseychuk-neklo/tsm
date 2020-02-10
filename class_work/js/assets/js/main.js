var student1Obj = {

    firstName: 'Ololo',
    lastName: 'Ololo',
    age: 18,
    grades: [1,1,3,2,5],
    course:1,
    gender: "male"

}
var student2Obj = {

    firstName: 'Ololo2',
    lastName: 'Ololo2',
    age: 18,
    grades: [1,1,3,2,3],
    course:1,
    gender: "male"

}
var student3Obj = {

    firstName: 'Ololo3',
    lastName: 'Ololo3',
    age: 32,
    grades: [1,3,3,2,3],
    course:1,
    gender: "female"

}
var student4Obj = {

    firstName: 'Ololo4',
    lastName: 'Ololo4',
    age: 18,
    grades: [2,2,2,2,3],
    course:1,
    gender: "female"

}
var students =[student1Obj, student2Obj, student3Obj, student4Obj];

for (let i=0; i<students.length; i++){
    if(students[i].age>17 && students[i].age<28 && students[i].gender == 'male'){
        let sum =0;
        for (let j=0; j<students[i].grades.length; j++ ){
            sum+= students[i].grades[j]
        }
       if((sum/students[i].grades.length) <3){
           delete students[i].grades;
           delete students[i].course;
           students[i].isReadyForArmy =true;
       }
    }
}
var soldiers =[];
for ( let i =0; i<students.length; i++){
    if (students[i].isReadyForArmy){
        soldiers.push(students[i]);
    }
}
console.log(soldiers);

