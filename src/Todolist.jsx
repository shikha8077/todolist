import react from "react";

const Todolist = (props) => {
    

      
    return(
        <>

    <li>  <button className="delete" onClick={() =>{
        props.onSelect(props.id)
    }}> Delete</button>

        {props.text}</li>
    </>
    );
};
 export default Todolist;