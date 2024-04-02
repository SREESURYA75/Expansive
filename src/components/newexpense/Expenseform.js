import {useState} from 'react'
import './Expenseform.css'
function Expenseform(props){
    const [title,settitle]=useState('')
    const[amount,setamount]=useState('')
    const[date,setdate]=useState('')

    function titlechange(event){
        settitle(event.target.value)
    }
    function amountchange(event){
        setamount(event.target.value)
    }
    function datechange(event){
        setdate(event.target.value)
    }
    function add(e){
        e.preventDefault()
        settitle('')
        setamount('')
        setdate('')
         const form={id:Math.floor(Math.random()*100),loan:title,cost:"Rs:"+amount,date:new Date(date)}
         props.form(form)
       
      
    }
    return(
        <div>
            <h2 id='expense'>Expense Form</h2>
            <div id='form'>
            <form >
                <lable htmlFor='title'>Title:</lable>
                <input id='title' type='text' value={title} onChange={titlechange} ></input>
                <lable htmlFor='amount'>Amount:</lable>
                <input id='amount1' type='number' value={amount} onChange={amountchange}></input><br></br>

                <lable htmlFor='datee'>Date:</lable>
                <input id='datee' type='date' value={date} onChange={datechange}></input>
            <div id='button' >
                <button type='button' id='but1' onClick={props.cancel}>Cancel</button>
                <button type='button' id='but2' onClick={add}>Submit</button></div>
            </form>
        </div></div>

    )
}
export default Expenseform;