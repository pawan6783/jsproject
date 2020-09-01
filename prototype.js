student = function(name,id,age){

    this.name = name;
    this.id = id;
    this.age = age;
}

student.prototype.nationality = "Indian";
let s1 = new student('john',150,20);
console.log(s1.nationality);