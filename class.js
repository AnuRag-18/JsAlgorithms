class Student{
    constructor(fName,lName){
        this.fName=fName;
        this.lName=lName;
    }
}
let stu1 = new Student("AnuRag","Rao");
let stu2 = new Student("AnuRag");

stu2.lName="boy";
console.log(stu1,stu2);