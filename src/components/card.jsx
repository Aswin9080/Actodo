
function Carditem(props){
    return(
        <div style={{backgroundColor:props.background}} className="p-2 text-center text-2xl border rounded-md flex-grow">
            <h3>{props.content}</h3>
            <p>{props.activity}</p>
        </div>
    )
}
export default Carditem