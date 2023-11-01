alert("Greetings: \n never give you up \n never gonna let you down \n never gonna run around and desert you " );

class Calculator{
    constructor(presentDisplay,previousDisplay){
       this.presentDisplay = presentDisplay
       this.previousDisplay = previousDisplay
       this.clear()
    }
    
    clear(){
       this.present = "";
       this.previous = "";
       this.operation = undefined;
       this.updateDisplay();
    }

    appendNumber(number){
        if(this.present.toString().includes('.') && number === '.') return;
        this.present = this.present.toString() + number.toString() ;
        
    }

    appendOperator(operator){
        if(this.present === "")return;
        if(this.previous != "") this.compute();
        this.operation = operator;
        this.previous = this.present;
        this.present = "";
    }
    
    delete(){
        this.present = this.present.toString().slice(0,-1);
    }
    
    compute(){
        if(isNaN(this.previous) && isNaN(this.present))return;
        if(this.operation === "+") this.present = +this.previous + +this.present;
        else if(this.operation === "-") this.present = +this.previous - +this.present;
        else if(this.operation === "*") this.present = +this.previous * +this.present;
        else if(this.operation === "÷") this.present = +this.previous / +this.present;
        this.previous = "";
        this.operation = undefined;
    }

    updateDisplay(){
        this.presentDisplay.innerText = this.present;
        if(this.operation != undefined) this.previousDisplay.innerText = this.previous + " " + this.operation;
        else this.previousDisplay.innerText = this.previous;
    }

}

const clearButton = document.querySelector('[data-clear]');
const numberButton = document.querySelectorAll('[data-number]');
const deleteButton = document.querySelector('[data-delete]');
const computeButton = document.querySelector('[data-compute]');
const operatorButton = document.querySelectorAll('[data-operator]');
const presentDisplay = document.querySelector('[data-present]');
const previousDisplay = document.querySelector('[data-previous]');

let calculator = new Calculator(presentDisplay,previousDisplay);

numberButton.forEach(button => {
    button.addEventListener('click', () =>{ calculator.appendNumber(button.innerText); calculator.updateDisplay();} )
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => {calculator.appendOperator(button.innerText); calculator.updateDisplay(); } )
});

clearButton.addEventListener('click', () => {calculator.clear(); calculator.updateDisplay();} );

deleteButton.addEventListener('click', () => {calculator.delete(); calculator.updateDisplay();});

computeButton.addEventListener('click', () => {calculator.compute(); calculator.updateDisplay();});