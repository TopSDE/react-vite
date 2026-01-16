// -------------------------------------------------------
// **IMP
// TOP/SENDER ---> MEDIATOR ---> BOTTOM/RECEIVER
/*
import React from 'react'

const Cart = (props) => {
    let {addToCart: {product, cost}} = props

    return (
        <>
            <h1>{product}</h1>
            <h1>{cost}</h1>
        </>
    )
}
export default Cart

*/

// -------------------------------------------------------
// **IMP
// TOP/SENDER ---> MEDIATOR ---> BOTTOM/RECEIVER
// /*

import React from 'react'

const Cart = (props) => {
    let {addToCart: {addtolist: {item, company, price: [a, b, c], color: {c1, c2}}, children}} = props

    return (
        <>
            <section>
                <h1>Item is : {item}</h1>
                <h1>Company is : {company}</h1>
                <h1>Price is : {a} {b} {c}</h1>
                <h1>Color is : {c1} {c2}</h1>
                {children}
            </section>
        </>
    )
}
export default Cart

// */