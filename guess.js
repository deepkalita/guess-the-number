let maxNumber=prompt("Enter your max number!");

let actualNumber=Math.floor(Math.random()*maxNumber)+1;
let guess=prompt("Enter your best guess! Press q to quit.");

while(guess!=actualNumber){
    
    if(guess<actualNumber){
        guess=prompt("Too low. Enter your next best guess! Press q to quit.");
    }
    else if(guess>actualNumber ){
        guess=prompt("Too high. Enter your next best guess! Press q to quit.");
    }
    // else if(guess>maxNumber){
        
    //     guess=prompt("That was higher that your max number. Keep it lower maybe! Press q to quit.");
    // }

    else if(guess='q'){
        alert("Don't worry, come back later!");
        break;

    } 
    }
    
    if(guess==actualNumber){
        alert("Congrats! You Guessed of Honor");
    }

    

 




