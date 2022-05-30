
function playTheGame(){
    let a = confirm("Do you want to play a game");
  if ( a == false) {
    alert('No problem, Goodbye');
  } 
  else {
    let usernumber
    let computerNumber = Math.floor(Math.random() * 10)
    console.log(computerNumber);
    let chance = 0
    do{  
        usernumber = Number(prompt('Select a number'))
        if (usernumber == '' || isNaN(usernumber)){
             alert('Sorry not a number')
            }

        else if(usernumber <= 0 || usernumber >= 10){ 
            alert('Sorry its not a good number')
        }
        else{
            compareNumbers(usernumber, computerNumber)
            
            if (chance >= 3){alert('out of chances, LOST')}
            chance++
        }
        
    }
    while(usernumber != computerNumber && chance < 3)
    
  }
}


function compareNumbers(user,computer){
    if(user == computer){
        alert("WINNER")
    }
    else if(user > computer){
        alert("Your number is bigger then the computer's, guess again")
    }
    else if(user < computer){
        alert("Your number is smaller then the computer's, guess again")
    }
   
}