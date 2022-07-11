// here for get each value

var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var ID=document.getElementById('ID')
var DOB =document.getElementById('DOB')
var showStudentData=document.getElementById('showStudentData')
let studentDataStre=""
// this function show the input 
function sumbitBtn(){
    let dataHolder={
        Firstname:fname.value,
        LastName:lname.value,
        ID:ID.value
    }
    console.log(dataHolder.Firstname );
    details=
        `${"name = " + dataHolder.Firstname  
           +"ID = " + dataHolder.ID}`
    studentDataStre=details+studentDataStre
   showStudentData.innerText= studentDataStre;
  }
    