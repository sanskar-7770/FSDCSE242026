
const root=document.getElementById('container');
const button=document.getElementById('btn');
const disp=document.getElementById('disp');
const loader=document.getElementById('loader');
async function fetchdata(){
    //alert("hii");
    

    try{
        loader.innerHTML='<h2 style= color:red> loading data....<h2>'
        const serverdata= await fetch('https://fakestoreapi.com/products');
                const jsondata=await serverdata.json();
                //console.log(jsondata[0].title);
                //disp.innerHTML=`${jsondata[0].title}`;
                let table=`<table border=2px>
                ${
                    jsondata.map((ele)=>(
                        `<tr>
                        <td><img src=${ele.image} height=200 width=200></td>
                        <td>${ele.title}</td>
                        <td>${ele.description}</td>
                        <td>${ele.price}</td>
                        <td>${ele.category}</td>
                        </tr>`
                    ))
                }

                </table>`
                disp.innerHTML=table;
    }catch(e){
        console.log("Error is"+e)
    }
    finally{
        loader.innerHTML='';
    }
}
button.addEventListener('click',fetchdata);