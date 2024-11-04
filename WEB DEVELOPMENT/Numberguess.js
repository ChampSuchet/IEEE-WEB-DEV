const min = 1;
const max = 100;

const answer = Math.floor(Math.random()*(max-min+1))+min;

let attempts=0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess a number between ${min}-${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }else if(guess<min||guess>max){
        window.alert("please enter a valid number");
    }else{
        attempts++;
        if(guess<answer){
            window.alert("too low");
        }else if (guess>answer){
            window.alert("too high");
        }else{
            window.alert(`correct the answer was ${answer},it took you ${attempts} attempts`);
            running = false;
        }
    }
    
}