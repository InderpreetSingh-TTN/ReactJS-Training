import { useState } from "react";


function App() {

  const[inputName , setInputName] = useState('');
  function action(){
    const node1 = document.createElement("li");
    const inputValue = document.getElementsByClassName('input')[0].value ;
    // console.log(inputValue);
    // setInputName(inputValue) ;
    const textnode = document.createTextNode(inputValue);
    node1.appendChild(textnode);
    document.getElementsByClassName('userInfo')[0].appendChild(node1); 
  }
  return (<>
    <h1> Hello World </h1>
    <div className="adduser">
      <input className="input" type="text"/>
      <button className="btn" onClick={()=>action()}>Add User</button>
      <br></br> <br></br>
      <h4>UserList</h4>
      <div className="userInfo"></div>
      
    </div>

    
    </>
  );
}

export default App;
