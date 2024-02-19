import { useState } from "react";
import InputBox from "./InputBox";


function App() {
  const[details , setDetails] = useState([{
    id:1 ,
    itemName:"TestItem",
    price:20 ,
    description:"description abc abc"
  }])

  function setNewDetails( args ){
      console.log(args) ;
      setDetails(args) ;
  }

  function removeItem( item ){
    let filterdetails = details.filter((e)=>e.id !== item.id);
    setDetails(filterdetails);
  }

  return(
    <>
    <InputBox setItems ={setNewDetails} detail= {details} />

    <h2>Cart</h2>
    <div>
      <table style={{border : '1px solid black'}}>
      {details.map((element)=>{
        return <tr style={{border : '1px solid black'}} > <td style={{border : '1px solid '}}>{element.id}</td> <td style={{border : '1px solid black'}}>{element.itemName}</td> <td style={{border : '1px solid black'}}>{element.price}</td> <td style={{border : '1px solid black'}} > {element.description}</td> <td style={{border : '1px solid black'}}> <button onClick={()=>removeItem(element)} >Remove</button> </td></tr>
      })}
      </table>
    </div>
    </>
  );
  
  
}

export default App;
