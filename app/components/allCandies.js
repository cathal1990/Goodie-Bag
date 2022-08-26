import React from 'react'
import { useSelector } from 'react-redux';

function allCandies() {

    const candies = useSelector(state => state.candies);
    console.log(candies)
    // return (
    //     // <div>
    //     //     {candies.map((candy) => {
    //     //         return <div>
    //     //             <h3>Candy Name: {candy.name}</h3>
    //     //             <p>Description: {candy.description}</p>
    //     //             <p>Quantity: {candy.quantity}</p>
    //     //             <img src={candy.imageUrl} />
    //     //         </div>
    //     //     })}
    //     // </div>
    // )
}

export default allCandies