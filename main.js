// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName, lastName)
{
    let user ={
        firstName: firstName,
        lastName: lastName}
    return user
}

console.log(createUser("John", "Martinez"))



function setAge(user, age)
{
    user.age = age
    return user
}
 console.log(setAge(createUser("John", "Martinez"), 50))


 function incrementAge(user){
    user.age = user.age + 1
    return user
 }
 console.log(incrementAge(setAge(createUser("John", "Martinez"), 50)))


 function fixCar(car){

     car = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaintenance: true
    }
    car.needsMaintenance = false
    return car
 }
console.log(fixCar())

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
  };
  
  const newGrades = [88, 70, 90]
  
  function addGrades(student, newGrades) {
    student.grades = student.grades.concat(newGrades)
    return student
  }
  console.log(addGrades(student, newGrades))


// function getDataType(car, dataType)
// {
    
//     car.make =  String
//     car.model = String
//     car.year = Number
//     car.needsMaintenance = Boolean
//     return car
// }

// console.log(getDataType("ford"))





// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
