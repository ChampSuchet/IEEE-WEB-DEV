function rollDice(){

const num = document.getElementById("numofdice").value;
const result = document.getElementById("diceresult");
const value=[];

for(let i=0;i<num;i++){
    const values = Math.floor(Math.random()*6)+1;
    value.push(values);
}
result.textContent=`dice: ${value.join(' , ')}`;
}