const increase = document.getElementById("btn1");
const reset = document.getElementById("btn2");
const decrease = document.getElementById("btn3");
const contlabel = document.getElementById("contain_label");
let count=0;

increase.onclick = function(){
    count++;
    contlabel.textContent = count;
}
reset.onclick = function(){
    count=0;
    contlabel.textContent = count;
}
decrease.onclick = function(){
    count--;
    contlabel.textContent = count;
}
