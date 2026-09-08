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


//const div=React.createElement('div',{style:{border:'2px solid red'}},h1,h2,img);
const h21=<h2>Hello World</h2>;//jsx
const h22=<h2>ABES Engineering college</h2>
const div=<div>{h21},{h22}</div>
const wrapper=<div style={{border:'1px solid black',padding:'10px'}}>{div}</div>

root.render(wrapper);