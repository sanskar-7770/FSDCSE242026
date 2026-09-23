import {useState} from 'react'
import cat from "../assets/cat.jpg"
 function ImageManipulation() {
    const [catHeight,setCatHeight]=useState(200);
    const [catWidth,setCatWidth]=useState(200);
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    function increaseHeight(){
        setCatHeight(catHeight+20);
    }
    function increaseWidth(){
        setCatWidth(catWidth+20);
    }
    
    function changebgcolor(){
        setRed(Math.random()*255);
        setBlue(Math.random()*255);
        setGreen(Math.random()*255);
    }

    
  return (
    <div>
        <h2>ImageManupulation</h2>
        <div style={{background:`rgb(${red},${green},${blue})`,height:'400px',width:'400px',border:'4px solid red',marginLeft:'10px',marginRight:'10px'}}>
            <img src={cat} height={catHeight} width={catWidth}/>
        </div>

        <div>
            <button onClick={increaseWidth}>Increase Width</button>
            <button onClick={increaseHeight}>Increase height</button>
            <button onClick={changebgcolor}>Change Color</button>
        </div>
        
    </div>
  );
}
export default ImageManipulation;
