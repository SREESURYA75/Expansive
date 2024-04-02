import './App.css';
import NewExpense from './components/newexpense/NewExpense';
import Expense from './components/Expense/Expense';
import {useState} from 'react'

function App() {
  
  const arr=[{id:Math.floor(Math.random()*100), date:new Date(2020,8,7),loan:'Bank Loan',delete:'delete',cost:'Rs:4000'},
           {id:Math.floor(Math.random()*100),date:new Date(2021,6,3),loan:'Bike Loan', cost:'Rs:6000'},
           {id:Math.floor(Math.random()*100),date:new Date(2021,4,2),loan:'Car Loan',delete:'delete',cost:'Rs:8000'}]

           const[add,setadd]=useState(arr)
           function form(form){
            setadd((add)=>{

              return[form,...add]

            })
           }
           function de1(id){
            setadd((arr)=>{return arr.filter((del1)=>del1.id !== id)})
           }

   
  return (
    <div className="App">
      <NewExpense cdform={form}></NewExpense>
    <Expense arr1={add} del={de1}></Expense>
    
    </div>
  );
}

export default App;
