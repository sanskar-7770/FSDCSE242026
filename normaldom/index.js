/*
const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(root);
const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div');
function showdata(){
    try{
        h2.innerText='welcome to dom';
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0_xbpidtbr56ItideEUM_TBaf82AOVNAnqJVMn2dGWjbSg_FFQ&s&ec=121966386';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    div.append(h2,img);
    div.style.backgroundColor='yellow'
    root.appendChild(div);
    
    }
    catch(e){
        console.log(e);
    }
    finally{
        button.remove();
    }
    

}
button.addEventListener('click',showdata);*/
const container = document.getElementById('root');

console.log(container);

const root = ReactDOM.createRoot(container);

const h2 = React.createElement(
    'h2',
    {
        style: {
            color: 'red',
            backgroundColor: 'cyan'
        }
    },
    'Hello React'
);
const h1=React.createElement('h1',{style:{color:'brown'}},'ABES Engineering college');
const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfPBU17zZFvJhnO7_JaJFjdF03TTMUo_60jzEgvDbeA&s=10',style:{height:'200px',width:'400px'}});
const div=React.createElement('div',{style:{border:'2px solid red'}},h1,h2,img);
const h21=<h2>Hello World</h2>;//jsx
root.render(h21);