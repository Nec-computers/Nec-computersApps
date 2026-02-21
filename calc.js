const display = document.getElementById("display");
function appendtoDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);

    }
    catch(error){
        display.value="Error";
    }

function deleteDisplay(){
display.value=display.value.tostring().slice(0, -1);
}

}