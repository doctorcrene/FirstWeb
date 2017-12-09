
let number1=0;
let number2=0;
let symbol;
let result;
let i=4;

function createdata() {
    let a={};
    a.number1=0;
    a.symbol=0;
    a.number2=0;
    a.result=0;
    return a;
}

let memory;

memory[0]=createdata();
memory[1]=createdata();
memory[2]=createdata();
memory[3]=createdata();
memory[4]=createdata();


function insert(a) {
    let temp=document.getElementById("output");
    number2=temp.value;
    if(a===20)
    {
        number2*=100;
    }
    else
    {
        number2*=10;
        number2+=a;
    }
    temp.value=number2;
}

function clears() {
    let temp=document.getElementById("output");
    temp.value=0;
    number1=0;
    number2=0;
    symbol=0;
}

function Delete() {
    let temp=document.getElementById("output");
    let number=temp.value;
    let end=number%10;
    number-=end;
    number/=10;
    temp.value=number;
}

function cal(a) {
    let temp=document.getElementById("output");
    symbol=a;
    number1=number2;
    number2=0;
    temp.value=0;
}

function euqal() {
    let temp=document.getElementById("output");
    switch(symbol)
    {
        case 'add':result=number1+number2;break;
        case 'minus':result=number1-number2;break;
        case 'multp':result=number1*number2;break;
        case 'divide':result=number1/number2;break;
        default:
    }
    temp.value=result;

    if(i===0)
    {
        for(let j=1;j<3;j++)
        {
            memory[j+1]=memory[j];
        }
    }
    memory[i].number1=number1;     //记忆
    memory[i].symbol=symbol;
    memory[i].number2=number2;
    memory[i].result=result;
    if(i>0)
    {
        i--;
    }


    number1=0;
    number2=result;
    symbol=0;
    result=0;

}

function PrintMemory() {

}