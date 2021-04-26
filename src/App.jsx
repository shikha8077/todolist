import react, { useState } from "react";
import Todolist from "./Todolist";

import './App.css';

const App = () =>{

  const [inputList , setInputList] = useState("");
  const [items,setItems] = useState([]);



  const itemlist = (e) =>{
    setInputList(e.target.value);
    console.log(itemlist);


  }

  const listOfItem= () =>{
    setItems((oldItems) =>{
    return[...oldItems,inputList];
  });

  };

  const deleteItems=(id) =>{
    console.log("deleted");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index) =>{
        return index != id ;
      })
    })
  }
  
  return(
<>
<div className="main">

  <input type="text" id="text" name="text" autoComplete="off" value={inputList}  placeholder="add a item" onChange={itemlist} />
   <button className="add" onClick={listOfItem}>Add</button>
  <div className="list">
    <ol>
      {
      items.map((itemval,index) =>{
   return <Todolist
   key={index}
   id={index}
   text= {itemval}
   onSelect={deleteItems}
/>
      })

    }




    </ol>
  </div>
  <button> Submit</button>
</div>

</>
  )
}


export default App;
