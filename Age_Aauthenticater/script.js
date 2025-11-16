const myinput = document.getElementById(`myinput`); 
const mybtn = document.getElementById(`mybtn`);
const mylabel = document.getElementById(`mylabel`);
const my0 = document.getElementById(`my0`);

let age;


mybtn.onclick = function(){

    let age = Number(myinput.value.trim());

    if(age!=Number){
    {
        mylabel.textContent = 'ENTER VALID INPUT!'
    }
      if(age >= 18){
        mylabel.textContent = 'YOU ARE ELEGIBLE TO ENTER!'
      }
      else if(age < 18){
        mylabel.textContent = 'YOU ARE NOT ELEGIBLE TO ENTER!'
      }
    }
 
 
    
}