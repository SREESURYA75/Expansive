import Expensedate from "./Expensedate";
// import { Icon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Expenseitem.css'
function Expenseitem(props){
    return(
        <div className='item'>
            <div id='item'>
                <div id='date'>
        <Expensedate arr2={props.arr2}></Expensedate></div>
        <div id='loan'>
        <h4>{props.arr2.loan}</h4></div>
     
        <div id='cost'>
        <h6>{props.arr2.cost}</h6></div>
        <div id='del'>
        {/* <DeleteIcon  sx={{color:"black" ,marginTop:"30px",width:"100px",marginLeft:"25px"}} size="large" /> */}
        <IconButton aria-label="delete"  sx={{color:"black" ,marginTop:"30px",width:"100px",marginLeft:"25px"}} size="large" onClick={()=>props.delet(props.arr2.id)}>
        <DeleteIcon />
           </IconButton>
             {/* <IconButton aria-label="delete" disabled color="primary" >
        <DeleteIcon onClick={()=>props.delete(props.arr2.id)}/>
      </IconButton> */}
      {/* <button onClick={()=>props.delete(props.arr2.id)}></button> */}
     
           
        </div>
        </div></div>

    )
}
export default Expenseitem;