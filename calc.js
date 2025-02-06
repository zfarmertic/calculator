const display = document.getElementById("display")
const appendDisplay = (value) =>{
        if(value === '⌫'){
            display.value = display.value.slice(0, -1)
        }
        else{
            display.value +=  value
        }
}

const clearDisplay = () =>{
    display.value = ""
}
const solveAnswer = () =>{
            try {
                
                let expression = display.value.replace('÷', '/').replace('x', '');
                
                display.value = eval(expression);
            } catch (e) {
                
                display.value = 'Error';
                setTimeout(clearDisplay, 1500); 
            }
}