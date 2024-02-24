"use strict"

const evaluationTable = document.getElementById('evaluationTable');
const result = document.getElementById('result');
let resEval = 0;

function calculate(){
    let expression = document.getElementById('postfixExpression').value;
    console.log("Postfix Expression: ",expression);
    evaluationTable.innerHTML = `
    <thead class="table-dark">
        <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Postfix</th>
            <th scope="col">Stack</th>
        </tr>
        <tbody id="tbody">
        </tbody>
    </thead>`;
    let res = evaluate(expression);
    console.log("Eval",res);
    result.style.display = 'block';
    result.innerText=`Evaluation: ${res}`;
    let resEval = numStack[numStack.length-1];
    if(!isNaN(resEval)){
        result.innerText += ` = ${resEval}`;
    }
}

function isOperand(val){
    if(val=='('||val==')'||val=='+'||val=='-'||val=='/'||val=='*'||val=='^'||val=='–'){
        return false;
    }
    return true;
}



function operation(a, b, operation){
    switch(operation){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '–':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        case '^':
            return a**b;
            break;
        default:
            console.log("Invalid Operation ", operation);
            return 0;
    }

}

function display(counter,expressionArr,index,stack){
    let stackElements = "";
    for(let i=0; i<stack.length; i++){
        stackElements += stack[i];
        stackElements += " "; 
    }
    let expression = "";
    for(let i=index; i<expressionArr.length; i++){
        expression += expressionArr[i];
        expression += " ";
    }
    const tbody = document.getElementById('tbody')
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <th scope="row">${counter}</th>
    <td>${expression}</td>
    <td>${stackElements}</td>
    `;
    tbody.appendChild(newRow);
}

let numStack = [];
function evaluate(expression){
    let expressionArr = expression.split(" ");
    console.log("Expression Array: ",expressionArr);
    let stack = [];
    let counter = 1;
    for(let i=0; i<expressionArr.length; i++){
        display(counter,expressionArr,i,stack);
        if(isOperand(expressionArr[i])){
            stack.push(expressionArr[i]);
            numStack.push(Number(expressionArr[i]));
        }else{
            let b = stack.pop();
            let a = stack.pop();
            stack.push(`(${a} ${expressionArr[i]} ${b})`); 
            console.log(stack[stack.length-1]);
            let num2 = numStack.pop();
            let num1 = numStack.pop();
            numStack.push(operation(num1,num2,expressionArr[i]));
            console.log(operation(num1,num2,expressionArr[i]));
        }
        counter++;
    }
    display(counter,"",0,stack);
    return stack[stack.length-1];

}