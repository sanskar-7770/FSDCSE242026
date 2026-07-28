//console.log("hello i m using js")

/*
const sum= function(a,b){
    return a+b;
}
//const sum=(a,b)=>{return a+b};

function root(a,b){
   return  Math.sqrt(a+b);
}

console.log(sum(5,4));
console.log(root(5,4));
*/
// (()=>{
//     console.log("heyyy....using IIFE")

// })();
// var a=23;
// if(a<40){
//     let a=40;
//     console.log("value of a inside block"+a)
// }
// console.log("value of a inside block"+a)
//callback
/*
function sum(a,b){
    return a+b;
}
function msgwithsum(clbk,msg){
        const result=clbk(40,50);
        console.log("hii,"+msg+ "and your result is="+result)
}
msgwithsum(sum,"rahul")*/
function login(error,msg){
    if(error){
        console.log("error is:"+error)
    }
    else{
        console.log(msg)
    }
}
function loginhanler(username,password,clbk){
    if(username=="sanskar7770"&&password=="12345"){
        clbk(null,"login success")
    }
    else{
        clbk("username or password is incorrect",null)
    }
}
loginhanler("sanskar7770","12345",login)
