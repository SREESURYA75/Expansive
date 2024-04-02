function Expensefilter(props){
   
    
    return(
        <div id='fil'>
            <h3 id='f'>Filter By Year </h3>
            <select id='f1' value={props.newvalue} onChange={props.insetvalue} >
                <option>year</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>

            </select>
        </div>
    )
}
export default Expensefilter;