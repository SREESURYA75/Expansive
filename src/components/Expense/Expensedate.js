import './Expensedate.css'
function Expensedate(props){
    const month=props.arr2.date.toLocaleString('en-US',{month:'long'})
    const date=props.arr2.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.arr2.date.getFullYear()
return(
        <div className='date'>

         <p id='da'>{month}</p>
         <p id='da'>{date}</p>
         <p id='da'>{year}</p>

        </div>
    )
}
export default Expensedate;