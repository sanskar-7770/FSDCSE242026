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
// function login(error,msg){
//     if(error){
//         console.log("error is:"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
// function loginhanler(username,password,clbk){
//     if(username=="sanskar7770"&&password=="12345"){
//         clbk(null,"login success")
//     }
//     else{
//         clbk("username or password is incorrect",null)
//     }
// }
// loginhanler("sanskar7770","12345",login)


// console.log("one");
// for(i=0;i<10000;i++){
//     console.log("i="+i);
// }
// //setTimeout(()=>{console.log("Two")},1000)
// console.log("three")
const container=document.getElementById('container');
const button=document.getElementById('btn');
//console.log(button)
//console.log(container)
const h1=document.createElement('h1');
h1.innerText='ABES ENGINEERING COLLLEGE';
const loader=document.createElement('h2');
container.appendChild(loader);
const img=document.createElement('img');

function ping(){
    try{
        loader.innerHTML='<h2> Loading data...</h2>'

  
   // alert("server ping");
   container.innerHTML='<h2 style :color :red>welcome to dom</h2>'
   h1.style.backgroundcolor='cyan';
   h1.style.color='red';
   container.appendChild(h1);
   img.src="https://media.geeksforgeeks.org/wp-content/uploads/20241120143259875787/DOM-Tree1.webp";
   img.setAttribute('height',200);
   img.setAttribute('width',200);
   container.appendChild(img);
     }catch(e){
        loader.innerHTML='<h2 style=color:red>error in loading data</h2>'
     }
     finally{
        container.removeChild(loader);
     }
     

}

button.addEventListener('click',ping)
