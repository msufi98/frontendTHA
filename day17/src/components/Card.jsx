import "./../styles.css"

function Card(props){
    console.log(props)
    return (
        <div className="Card">
            <h2>{props.children.food}</h2>
            <p>The number of calories is {props.children.calories}</p>
        </div>
    )
}

export default Card