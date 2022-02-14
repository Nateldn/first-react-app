// import { useState } from "react";

// const Map = () => {
//      const [bookPrices, setBookPrices] = useState([2.5, 4.5, 3.5, 6.0, 8.0]);
//      const [names, setNames] = useState (["leon", "Gandalf", "Decker", "Obi-wan"]);

//     return (
//         <div>
//             <h1>Book Price List</h1>
//             {
//               bookPrices.map((price) => {
//                 return <h3>This book is £{price}</h3>
                
//               })
//             }
//         </div>
//     )
// }


// export default Map


import { useState } from "react"
const Map = () => {
    const [bookPrices, setBookPrices] = useState([2.4, 4.3, 5.5, 6.1])
    const [names, setNames] = useState(["leon", "gandalf", "decker", "obi-wan"])

    return (
        <div>
            <h1>i am Map</h1>
            {names.map((name, index) => {
                return <Display key={index} firstName={name}/>
            })}
        </div>
    )
}

const Display = ({ firstName }) => {
    return (
        <div>
            <h1>name: {firstName}</h1>
        </div>
    )
}
export default Map