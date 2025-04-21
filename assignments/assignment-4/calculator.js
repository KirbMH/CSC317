
const display = document.getElementById('display');


function AddToDisplay(i){
    display.value += i;
}

function ClearDisplay(){
    display.value = "";
}

function calculate(){
    try{
       display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}























//input
/*
document.addEventListener("keydown", function(event)){
    const key = event.key;

    const keymap ={
        "0":"zero"
    }

    //perform calc logic

    //if(0-9 %+-...){
    //    event.preventDefault();
    //}
   // else if(key == "Enter"){

    //}


}
*/























