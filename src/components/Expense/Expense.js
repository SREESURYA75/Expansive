import Expensefilter from "./Expensefilter";
import Expenseitem from "./Expenseitem";
import {useState} from 'react'

function Expense(props){
    const[newvalue,setnewvalue]=useState('year')
    function insetvalue(event){
        setnewvalue(event.target.value)
    }
        
    

    const filter=props.arr1.filter((o)=>{
        return o.date.getFullYear().toString()===newvalue;
    })
     
    return(
        <div>
            <div id='filter'>
             <Expensefilter  insetvalue={insetvalue}  newvalue={newvalue}> </Expensefilter>  
             <div>
                {newvalue==="year" ? (props.arr1.map((op)=>(<Expenseitem arr2={op} delet={props.del}></Expenseitem>))):
                filter.length===0? (<h4 id='empty'>No Found Data</h4>):
                // newvalue.length ===0? (<h4 id='empty'>No Found Data</h4>): 

                (filter.map((o)=>(<Expenseitem arr2={o} delet={props.del}></Expenseitem>)))

                }
                </div>         
            {/* {filter.map((o)=>(<Expenseitem arr2={o}> </Expenseitem> ))} */}
 
        </div></div>

    )
}
export default Expense;   
 
 
 