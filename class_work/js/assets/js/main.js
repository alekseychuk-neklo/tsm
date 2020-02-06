var student1Obj = {
    id:1,
    firstName: 'Ololo',
    lastName: 'Ololo',
    active: true,
    educationLevel: null

}
var student2Obj = {
    id:2,
    firstName: 'Ololo2',
    lastName: 'Ololo',
    active: false,
    educationLevel: null
}
var student3Obj = {
    id:3,
    firstName: 'Ololo2',
    lastName: 'Ololo',
    active: false,
    educationLevel: null
}
var studArr = [];
studArr.push(student1Obj, student2Obj, student3Obj);

for (var i =0; i< studArr.length; i++){
    console.log(studArr[i])
}










class Student {
    constructor(firstName, lastName,age=null, distance_learning=true, specification={}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.distance_learning = distance_learning;
        this.specification =specification;
    }

    get fullName(){
        return this.firstName+" "+this.lastName;
    }

    get introduction(){
        var introduction = this.fullName+'.';
        if(this.age !== undefined && this.age !==null){
            introduction += `\n\r ${this.age} years old.`;
        }
        if(this.distance_learning!== undefined && this.distance_learning!==null){
            introduction +="\n\r "+(this.distance_learning?'full-time':'distance learning')+ ' student.'
        }
        if(this.specification!== undefined && this.specification!==null){
            introduction += `\n\rSpecification: ${this.specification.name}`;
        }
        return introduction;
    }
}

var student = new Student('Bill', 'Gates', 56, true, {
    name:'it consalting',
    group:'12-itz'
});
var student2 = new Student('Mark', 'Zuckerberg', 34, true, {
    name:'seo & smm',
    group:'14-itz'
});
var student3 = new Student('Pavel', 'Durov', 34, false, {});

var students = [student, student2, student3];
students.forEach(element => {
    console.log(element.introduction);
    console.log(element)
});