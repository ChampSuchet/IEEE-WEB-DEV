const textbox = document.getElementById("textbox");
const tofaren = document.getElementById("tofaren");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(tofaren.checked){
        temp = Number(textbox.value);
        temp = temp*9/5+32;
        result.textContent = temp;
    }else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = (5/9) * (temp-32);
        result.textContent = temp;
    }else{
        result.textContent = "UNIT TERA BAAP CHOOSE KAREGA??";
    }
}