// here for get each value

var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var ID=document.getElementById('ID')
var DOB =document.getElementById('DOB')
var showStudentData=document.getElementById('showStudentData')
var IDForCHeck=document.getElementById('IDForCHeck')
var checkIdBtn=document.getElementById('checkIdBtn')
let studentDataStore=[];
// this function show the input 
function sumbitBtn(){
    let studentInfo={
        Firstname:fname.value,
        LastName:lname.value,
        ID:parseInt(ID.value)
    }
   
        let duplicate=false;
        for(let i=0; i<studentDataStore.length;i++)
        {
            if(studentDataStore[i].ID===studentInfo.ID)
            {
                duplicate=true;
                break;
            }
        }
        if(duplicate==false)
        {
            studentDataStore.push(studentInfo);
        }

        if(duplicate==true)
        {
            alert("duplicate id cannot be inserted");
        }
     
    showAllDetails(studentDataStore);
    
  }
//   this function show the dataile taht come fromuser
  function showAllDetails(studentDataStore)
  {
    let wholeList="";
    let allDisplayElm=document.getElementById("showStudentData");
    for(let i=0;i<studentDataStore.length;i++)
    {
        console.log(studentDataStore[i].Firstname+" checi");
        let liElm=`<li>${studentDataStore[i].Firstname}</li>`;
        wholeList=wholeList+liElm;
    }
    allDisplayElm.innerHTML=wholeList;
  }
 



//   this fnction for get details by id
  function showDetailsId() {
    let studentId= parseInt(IDForCHeck.value);
    let found=0;
    for(let i=0; i<studentDataStore.length;i++)
    {
        if(studentId===studentDataStore[i].ID)
        {
            console.log('here3');
           console.log(studentDataStore[i].Firstname);
           displayStudentDetail.innerHTML=(studentDataStore[i].Firstname);
           found=1;
           break;
        }
    }
     if ( found==0)
     {
        alert("this id dose not exits")
     }
  }

//   this function made for delet
    
function deleteData() {
  let checkIdBtnDeleteElm=document.getElementById('IDForDelete');
         let deleteId= parseInt(checkIdBtnDeleteElm.value);
        let found=0; 
    for(let i=0; i<studentDataStore.length;i++)
    {
        if(deleteId===studentDataStore[i].ID)
        {
            found=1;
            studentDataStore.splice(i,1);
            break;
        }
    }
    if ( found==0)
    {
       alert("this id dose not exits");
    }

    showAllDetails(studentDataStore);
    
}
  

  
    
