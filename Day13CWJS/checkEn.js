console.log("\"Hello>..\"")

var num=56;// FUnction SCope

if(num%2==0)
    console.log("even");
else
    console.log("odd");

{
    let i=10;// block scope
    console.log(i);
    const pi=3.14;
    console.log(pi);
    pi=3;
    console.log(pi);
}

var n=1;
switch(n){
    case 1: console.log("hi...");break;
    case 2: console.log("bye...");break;
    case 3:console.log("go...");break;
    default:console.log("Invalid Choice");
}

// console.log(i);