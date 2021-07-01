const calculator = {
    displaynummber: '0',
    operator:null,
    firstNumber:null,
    waitingForSecondNumber:false
};

function updateDisplay(){
    document.querySelector(".number").innerText = calculator.displaynummber;
}

function clearCalculator(){
    calculator.displaynummber = "0";
    calculator.operator= null;
    calculator.firstNumber=null;
    calculator.waitingForSecondNumber = false;
}
function inputDigit(digit){
    if(calculator.displaynummber === '0'){
        calculator.displaynummber = digit;
    }
    else {
        calculator.displaynummber += digit;
    }
}
function inverseNumber (){
    if(calculator.displaynummber === '0'){
        return;
    }
    calculator.displaynummber = calculator.displaynummber * -1;
}
function handleOperator (operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displaynummber;
        calculator.displaynummber = '0';
    }
    else{
        alert('Operator sudah ditetapkan')
    }
}
function performCalculator(){
    if (calculator.firstNumber == null || calculator.operator == null){
        alert("Anda Belum menetapkan operator");
        return;
    }
    let result = 0;
    if(calculator.operator ==="+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displaynummber);
    }
    else if (calculator.operator ==="*"){
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displaynummber);
    }
    else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displaynummber);
    }
    calculator.displaynummber = result;
}
const btn = document.querySelectorAll(".btn");
for (let button of btn){
    button.addEventListener('click',function(event){

        const target = event.target;
        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if(target.classList.contains('equals')){
            performCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('operator')){
            handleOperator(target.innerText)
            return;
        }
        inputDigit(target.innerText);
        updateDisplay()
    });
}