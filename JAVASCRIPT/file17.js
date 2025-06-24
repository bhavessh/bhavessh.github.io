
//closure example
// A closure is a function that retains access to its lexical scope, even when the function is
// executed outside that scope. This allows the function to remember the environment in which it was created
// and access variables that were in scope at the time of its creation.


function main(){
    let b=1;
    function sub(){
        return b++
    }
    return sub
}

let f1=main();
console.log(f1())
console.log(f1())
console.log(f1())

