import { useState } from "react"


// State Hook Function 
const State = () => {
    const [persons, setPersons] = useState([
        {name: "dan", age: "33"},
        {name: "ben", age: "12"},
    ])

    const [loggedIn, SetloggedIn] =
 useState(false)

    
const handleClick = () => {
    alert("hello world")
}



return (
    <div>
        <Person 
            name={persons[0].name}
            age={persons[0].age}
            magic={handleClick}    
        />
    </div>
)
}

const Person = (props) => {
    return (
        <div>
            <h1 onClick={props.magic}>{props.name}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}

export default State
