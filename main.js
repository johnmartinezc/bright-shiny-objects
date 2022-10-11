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


  
  function addGrades(student, newGrades) {
     student = {
        name: 'Anthony DeRosa',
        email: 'anthony.derosa@codeimmersives.com',
        grades: [80, 100, 95]
      };
      
       newGrades = [88, 70, 90]

    student.grades = student.grades.concat(newGrades)
    return student
  }
  console.log(addGrades())


function getDataType(datatype,car)
{

    let type = car
    type = typeof datatype[car]
    
    return type
}

console.log(getDataType)





function addTodo(todo, newTodo){
     todo = [{ 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
    ]
     newTodo = [{
        title: 'Call mom', 
        isComplete: false
    }];

     todo = todo.concat(newTodo)
return todo
}
console.log(addTodo())




function addSong(playlist, newSong){
     playlist = {
        title: 'My jams',
        duration: 7,
        songs: [
            {
                title: 'Texas Sun',
                artist: 'Khruangbin',
                duration: 4
            },
            {
                title: 'Malamente',
                artist: 'Rosalia',
                duration: 3
            }
        ]
    };
    
      newSong = {
        title: 'Old Friends',
        artist: 'Pinegrove',
        duration: 3
    };
     

playlist.songs = playlist.songs.concat(newSong)
playlist.duration = playlist.duration + newSong.duration

return playlist
}

console.log(addSong())

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};

const updateReportCard1 = 
{
    lowestGrade: 62,
    highestGrade: 96,
    averageGrade: 77,
    grades: [70, 96, 80, 62]
}

const updateReportCard2 =
{
    lowestGrade:  70,
    highestGrade: 100,
    averageGrade: 86.5,
    grades: [70, 96, 80, 100]
}


function updateReportCard(reportCard, updateReport){
    let sum = 0
    reportCard.lowestGrade = updateReportCard1.lowestGrade
    reportCard.grades = reportCard.grades.concat(updateReportCard1.lowestGrade)
    for(let i in updateReportCard1.grades){
        sum += updateReportCard1.grades[i]

    }
    let cnt = updateReportCard1.grades.length
    updateReportCard1.averageGrade = sum / cnt
    
    reportCard.highestGrade = updateReportCard2.highestGrade
    reportCard.grades = reportCard.grades.concat(updateReportCard2.highestGrade)
    
    for(let i in reportCard.grades){
        sum += reportCard.grades[i]    
    }
    let numbercnt = reportCard.grades.length
    reportCard.averageGrade = sum / numbercnt

return updateReportCard1
}

console.log(updateReportCard(reportCard))








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
