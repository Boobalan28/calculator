const container=document.createElement('div');
container.setAttribute('class','container');

const calculator= document.createElement('div');
calculator.setAttribute('class','calculator');
calculator.innerHTML=`<input type="text" placeholder="0" id="output">
                      <button onclick="del()">DEL</button>
                      <button onclick="del1()">C</button>
                      <button onclick="display('%')">%</button>
                      <button onclick="display('/')">/</button>
                      <button onclick="display('7')">7</button>
                      <button onclick="display('8')">8</button>
                      <button onclick="display('9')">9</button>
                      <button onclick="display('*')">*</button>
                      <button onclick="display('4')">4</button>
                      <button onclick="display('5')">5</button>
                      <button onclick="display('6')">6</button>
                      <button onclick="display('-')">-</button>
                      <button onclick="display('1')">1</button>
                      <button onclick="display('2')">2</button>
                      <button onclick="display('3')">3</button>
                      <button onclick="display('+')">+</button>
                      <button onclick="display('.')">.</button>
                      <button onclick="display('0')">0</button>
                      <button onclick="result()" class="equal">=</button>`;

container.append(calculator);
document.body.append(container);


let output=document.getElementById("output");


function display(num){
     output.value += num;
}
function result(){
    try{
        output.value=eval(output.value);
    }
    catch{
        alert("invalid");
    }
}



function del(){
    output.value=output.value.slice(0,-1);
}
function del1(){
    output.value="";
}


                      

