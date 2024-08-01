let num=1;
while(num<=10)
    console.log(num++);

var num1=454;
var temp=num;
var rev=0;
while(temp>0)
{
    var rem=num%10;
    rev=rev*10+rem;
    temp=Math.floor(temp/10);
}

if(num==rev)
    console.log("Palindrome");
else
console.log("Not a Pal");


var str="harsha";

if(str.split('').reverse().join('')==str)
    console.log("Palindrome ");
else
console.log("Not");