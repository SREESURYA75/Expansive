import { useState } from "react";
import Expenseform from "./Expenseform";

function NewExpense(props){
  
    const[but,setbut]=useState(false)
    function button(){
        setbut(true)
    }
    function cancel1(){
        setbut(false)
    }
    function formcd(form){
        props.cdform(form)
        setbut(false)
        }
    return(
        <div>
           {but===true? (<Expenseform cancel={cancel1} form={formcd}></Expenseform>):
            <button id='view' onClick={button}>View Form</button>
           } 

        </div>

    )
}
export default NewExpense;