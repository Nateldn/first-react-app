import { useState } from "react"
// const Common = () => {
//     const [numbers, setNumbers] = useState([1, 2, 3, 4])

//     const addHandler = () => {
//         let storedNums = [...numbers]
//         storedNums.push(numbers[numbers.length - 1] + 1)
//         setNumbers(storedNums)
//     }

//     const removeHandler = () => {
//         let storedNums = [...numbers]
//         storedNums.splice(numbers[numbers.length - 1] - 1)
//         setNumbers(storedNums)
//     }
    
//     return (
//         <div>
//             <h1>common component</h1>
//             {numbers.map((number, index) => {
//                 return <h1 onClick={removeHandler} key={index}>{number}</h1>
//             })}
//             <button onClick={addHandler}>add number</button>
//         </div>
//     )
// }


const Common = () => {
    const [inputText, setInputText] = useState ("")

    const handler = (event) => {
        inputText(event.target.value)
    }

}




export default Common

