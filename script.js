//your JS code here. If required.
// Function to get a cookie by name

let btn = document.querySelector('#form');


function getcookie(e, name,value){
    e.preventDefault();
  
    let expire = ""
    console.log("Testing...");
    
    let x = document.cookie = name+"="+encodeURIComponent(JSON.stringify(value));
    console.log(x);   
  }
  
function loadvalues(e)
{
    console.log(e);
    e.preventDefault();
    let size= document.getElementById('fontsize').value;
    let color= document.getElementById('fontcolor').value;
	getcookie(e,"key",{size,color})
}




btn.addEventListener('submit',(e)=>loadvalues(e));