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




function updateReportCard(report, newGrade){
    report.grades.push(newGrade)
    let hG = report.grades[0]
    let lG = report.grades[0]
    let sum = 0

    for(let i = 0; i < report.grades.length;i++){
        sum = sum + report.grades[i]
        if(report.grades[i] < report.grades[i+1] && report.grades[i] < lG){
            lG = report.grades[i]
        }else if(report.grades[i] > report.grades[i+1] && report.grades[i+1] < lG){
            lG = report.grades[i+1]
        }else if(report.grades[i] > report.grades[i+1] && report.grades[i] > hG){
            hG = report.grades[i]
        }else if (report.grades[i] < report.grades[i+1] && report.grades[i+1] > hG){
            hG = report.grades[i+1]}
    }
    let avg = sum/(report.grades.length)
    avg = Number((Math.round(avg *2)/2).toFixed(1))

    report.lowestGrade = lG
    report.highestGrade = hG
    report.averageGrade = avg

    return report
}

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};

console.log(updateReportCard(reportCard, 100))

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
