//Create variables that store DOM elements
let numbers=document.getElementsByClassName("numbers");
let operators=document.getElementsByClassName("operators");
let display=document.getElementById("display");
let allClear=document.getElementById("all-clear");
let clearEntry=document.getElementById("clear-entry");
let decimal=document.getElementById("decimal");
let positiveNegative=document.getElementById("positive-negative");

//Create variables that hold temporary values
let currentInput="";
let pastInput=0;
let pastOperator="";

//Add event listerner to number buttons and update display menu
for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click",(e)=>{
        let inputText=e.target.innerText;
        if((currentInput === "") && (inputText === "0")){
            display.innerText="0";
        }
        else{
            currentInput=currentInput+inputText;
            display.innerText=currentInput;
        }
    })
}

//Add event listerner to operator buttons and calculate result
for(let i=0; i<operators.length; i++){
    operators[i].addEventListener("click",(e)=>{
        let operator=e.target.innerText;
        switch(operator){
            case "+":
                calculateResult();
                currentInput="";
                pastOperator="+";
                break;
            case "-":
                calculateResult();
                currentInput="";
                pastOperator="-";
                break;
            case "*":
                calculateResult();
                currentInput="";
                pastOperator="*";
                break;
            case "/":
                calculateResult();
                currentInput="";
                pastOperator="/";
                break;
            case "=":
                calculateResult();
                currentInput="";
                pastOperator="=";
                break;
            default: break;
        }
    })
}

//Function that performs mathematical operations 
function calculateResult(){
    if(pastOperator === "+"){
        pastInput=pastInput+Number(currentInput);
        display.innerText=pastInput;
    }
    else if(pastOperator === "-"){
        pastInput=pastInput-Number(currentInput);
        display.innerText=pastInput;
    }
    else if(pastOperator === "*"){
        pastInput=pastInput*Number(currentInput);
        display.innerText=pastInput;
    }
    else if(pastOperator === "/"){
        pastInput=pastInput/Number(currentInput);
        display.innerText=pastInput;
    }
    else if(pastOperator === ""){
        pastInput=Number(currentInput);
    }
}

//Add event listener to AC button and clear everything when that button is clicked
allClear.addEventListener("click",()=>{
    currentInput="";
    pastInput=0;
    pastOperator="";
    display.innerText="0";
})

//Add event listener to CE button and clear 1 entry when that button is clicked
clearEntry.addEventListener("click",()=>{
    if(currentInput.length>1){
        currentInput=currentInput.slice(0,-1);
        display.innerText=currentInput;
    }
    else{
        display.innerText="0";
    }
})

//Add event listener to decimal button and update display menu
decimal.addEventListener("click",()=>{
    if(currentInput === ""){
            currentInput="0.";
            display.innerText=currentInput;
        }
        else{
            currentInput=currentInput+".";
            display.innerText=currentInput;
        }
})

//Add event listener to positive/negative button and update display menu
positiveNegative.addEventListener("click",()=>{
    if(currentInput!=""){
        if(display.innerText.slice(0,1)==="-"){
            currentInput=currentInput.replace("-","");
            display.innerText=currentInput;
        }
        else{
            currentInput="-"+currentInput;
            display.innerText=currentInput;
        }
    }
})