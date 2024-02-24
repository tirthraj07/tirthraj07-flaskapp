const conversionTable = document.getElementById('conversionTable');
const result = document.getElementById('result');

function convert(){
    let expression = document.getElementById('infixExpression').value;
    console.log("Expression: ",expression);
    conversionTable.innerHTML = `
    <thead class="table-dark">
        <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Prefix</th>
            <th scope="col">Stack</th>
            <th scope="col">Postfix</th>
        </tr>
        <tbody id="tbody">
        </tbody>
    </thead>`;
    let postfix = infixToPostfix(expression);
    console.log("Postifix: ",postfix);
    result.style.display = 'block';
    result.innerText=`Postfix Expression: ${postfix}`;
   
}

function display(counter,expressionArr,index,stack,postfix){
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
    <td>${postfix}</td>
    `;
    tbody.appendChild(newRow);
}

function isOperand(val){
    if(val=='('||val==')'||val=='+'||val=='-'||val=='/'||val=='*'||val=='^'||val=='–'){
        return false;
    }
    return true;
}

function infixToPostfix(expression){
    let expressionArr = expression.split(" ");
    console.log("Expression Array: ",expressionArr);
    let stack = [];
    let counter = 1;
    
    let precedence = new Map([
        ["(",0],
        ["+",1],
        ["-",1],
        ["–",1],
        ["*",2],
        ["/",2],
        ["^",3]
    ]);
    let postfix = "";
    for(let i=0; i<expressionArr.length; i++){
        display(counter,expressionArr,i,stack,postfix);
        if(isOperand(expressionArr[i])){
            postfix+=expressionArr[i];
            postfix+=" ";
        }
        else{
            if(stack.length==0){
                stack.push(expressionArr[i]);
            }
            else if(expressionArr[i]=="("){
                stack.push(expressionArr[i]);
            }
            else if(expressionArr[i]==")"){
                while((stack.length!=0)&&(stack[stack.length-1]!="(")){
                    postfix += stack.pop();
                    postfix+=" ";
                }
                stack.pop();
            }
            else if((precedence.get(expressionArr[i])>precedence.get(stack[stack.length-1]))||(stack[stack.length-1] == "(")){
                stack.push(expressionArr[i]);
            }
            else{
                while (
                    stack.length != 0 &&
                    precedence.get(stack[stack.length - 1]) >= precedence.get(expressionArr[i])
                ) {
                    postfix += stack.pop();
                    postfix+=" ";
                }
                stack.push(expressionArr[i]);
            }
        }
        counter++;

    }

    while(stack.length!=0){
        display(counter,"",0,stack,postfix);
        postfix += stack.pop();
        postfix+=" ";
        counter++;
    }
    display(counter,"",0,stack,postfix);
    return postfix;

}


{/* <table id="conversionTable" class="table table-striped table-hover w-75" style="margin: auto;">
        <thead class="table-dark">
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Expression</th>
              <th scope="col">Stack</th>
              <th scope="col">Postfix</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
    </table> */}