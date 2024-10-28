const display = document.getElementById("display");
const alphabet = ["E","R","O"]
let calculated = false

display.focus;
display.setSelectionRange(display.value.length,display.value.length);

function appendToDisplay(input){
    let found = false
    for (const item of alphabet) {
        if (display.value.includes(item)) {
          found = true;
          break;
        }
      }
    if (found == true){
        display.value = ""
    }
    if (calculated == true){
        display.value = ""
        calculated = false
    }
    display.value += input;
}

function clearScreen(){
    display.value = ""
}

function calc(){
    try{
        display.value =  eval(display.value)
        calculated = true
    }
    catch(error){
        display.value = "ERROR"
    }
}