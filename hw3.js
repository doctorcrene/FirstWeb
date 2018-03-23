
let number1=0;
let number2=0;
let symbol;
let result;
let i=0;j=0;

function createdata(number1,symbol,number2,result) {
    let a={};
    a.number1=number1;
    a.symbol=symbol;
    a.number2=number2;
    a.result=result;
    return a;
}

let memory;

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
    j=0;
}

function clears() {
    let temp=document.getElementById("output");
    temp.value=0;
    number1=0;
    number2=0;
    symbol=0;
    j=0;
}

function Delete() {
    let temp=document.getElementById("output");
    let number=temp.value;
    let end=number%10;
    number-=end;
    number/=10;
    temp.value=number;
    j=0;
}

function cal(a) {
    let temp=document.getElementById("output");
    symbol=a;
    number1=number2;
    number2=0;
    temp.value=0;
    j=0;
}

function equal() {
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

    memory[i]=createdata(number1,symbol,number2,result);
    temp.value=memory[i].number1.toString()+memory[i].symbol;

    number1=0;
    number2=result;
    symbol=0;
    result=0;
    j=0;
}

function printf() {
    if(j<=i)
    {
        let temp=document.getElementById("output");
        temp.value=memory[j].number1;

        number1=0;
        number2=0;
        symbol=0;
        result=0;
    }
    if(j===i){}
    else
        j++;
}

function dot() {
    let temp=document.getElementById("output");
    let a=temp.value;
    temp.value=a+'.';
    j=0;
}