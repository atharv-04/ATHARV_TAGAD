/*console.log("hello world!");
let val=19;
val='hello';
val=false;
val='world';
console.log(val)

let num=4;
if(num%2==0)
{
    console.log("the number is even")
} else 
{
    console.log("the number is odd")
}
console.log("Hi");
const prompt=require('prompt-sync')();
const name=prompt("what is your name");
console.log("hello", +Name+ "!");*/
function sq(x){
    let ans=0;
    ans=x*x;
    return ans;
}
console.log("the answer is:"+sq(2));

function greet(name, age) {
    console.log("hello,"+name+ "!");
    age();
}
function gdb(){
    console.log("Goodbye!")
}
greet("riddhi",gdb);