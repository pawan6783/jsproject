var students = [
    { id : 14, name : "kyle"},
    { id : 16, name : "suzy"},
    { id : 18, name : "sarah"}
];

function getStudentName(studentID){

    for( let val of students){
        if(val.id == studentID){
            return val.name;
        }
    }
}

var name = getStudentName(16);
console.log(name);