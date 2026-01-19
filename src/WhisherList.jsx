// -------------------------------------------------------
// **IMP
// TOP/SENDER ---> MEDIATOR ---> BOTTOM/RECEIVER
/*

import React from 'react'
import Cart from './Cart'

const WhisherList = (props) => {
    console.log(props);
    
    return (
        <>
            <Cart
            addToCart={props}/>
        </>
    )
}
export default WhisherList

*/

// -------------------------------------------------------
// **IMP
// TOP/SENDER ---> MEDIATOR ---> BOTTOM/RECEIVER
/*

import React from 'react'
import Cart from './Cart'

const WhisherList = (props) => {
    console.log(props);
    
    return (
        <>
            <Cart
            addToCart={props}/>
        </>
    )
}
export default WhisherList
*/

// ------------------------------------------------------------------
// **IMP
// CONTEXT API
/*

import React, { useContext } from 'react'
import { ProductApi } from './context/ProductContext'

const WhisherList = () => {
    let data = useContext(ProductApi)

    console.log(data);
    
    return (
        <>
            <h1>WisherList = {data}</h1>
        </>
    )
}
export default WhisherList

*/