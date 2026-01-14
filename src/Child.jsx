/*
const Child = () => {
    return <h1>This is Child</h1>
}
export default Child
*/

// -------------------------------------------------------
// **IMP
// PROPS

/*
    import React from 'react'
    const Child = (props) => {
        console.log(props);
        
        return (
            <>
                <h1>Student name : {props.student}</h1>
                <h1>sid : {props.sid}</h1>
                <h1>Degree : {props.bool && "B.E"}</h1>
            </>
        )
    }
    export default Child
*/

// **IMP
// PROPS DESTRUCTURING - AFTER RECEIVING

/*
import React from 'react'
const Child = (props) => {
    // props => Here the receiving parameter NAME can be anything,
    // but better to take name as props
    // **PROP HOLDS ONLY ONE OBJECT

    console.log(props);
    const {employee, sal, bool} = props

    return (
        <>
        <h1>Employee : {employee}</h1>
        <h1>Salary : {sal}</h1>
        <h1>Role : {bool ? "Dev" : "Tester"}</h1>
        </>
    )
}
export default Child
*/

/*
// **IMP
// PROPS DESTRUCTURING - WHILE RECEIVING
    import React from 'react'
    const Child = ({employee, sal, bool}) => {
        return (
            <>
            <h1>Employee : {employee}</h1>
            <h1>Salary : {sal}</h1>
            <h1>Role : {bool ? "Dev" : "Tester"}</h1>
            </>
        )
    }
    export default Child
*/

// **IMP
// PROPS DESTRUCTURING - SENDING ARRAY AS "PROP VAL"
/*
    import React from 'react'
    const Child = (props) => {

        console.log(props);
        let {institute : [i1, i2, i3], tech : [t1, t2, t3]} = props

        return (
            <>
            <h1>In {i2} you can learn {t1}</h1>
            <h1>In {i3} you can learn {t2}</h1>
            <h1>In {i1} you can learn {t3}</h1>
            </>
        )
    }
    export default Child

*/

// **IMP
// PROPS DESTRUCTURING - SENDING OBJ AS "PROP VAL"
/*

    import React from 'react'
    const Child = (props) => {

        console.log(props);
        let {institute: {pname, age}, address: {state, city}} = props

        return (
            <>
            <h1>Age of {pname} is {age}</h1>
            <h1>He is from {city} which is located in {state}</h1>
            </>
        )
    }
    export default Child

*/

// **IMP
// PROPS DESTRUCTURING - SENDING "MULTIPLE VAL" AS "PROP VAL"
/*

    import React from 'react'

    const Child = (props) => {
        console.log(props);
        
        let {empDetails: {employee, company, salary}, empSkills: [tech1, tech2, tech3]} = props

        return (
            <>
                <h1>{employee} is working in {company} with {salary}</h1>
                <h1>Skills known are {tech1}, {tech2}, {tech3}</h1>
            </>
        )
    }

export default Child
*/

// ---------------------------------
// **IMP
// PROPS CHILDREN
/*

    import React from 'react'
    
    const Child = (props) => {
        console.log(props);
        
      return (
        <>
            {props.children}
        </>
      )
    }
    export default Child

*/

// ---------------------------------
// **IMP
// PROPS CHILDREN => AFTER RECEIVING
/*

    import React from 'react'
    
    const Child = (props) => {
        console.log(props);
        let {children} = props
        
      return (
        <>
            {children}
        </>
      )
    }
    export default Child

*/

// ---------------------------------
// **IMP
// PROPS CHILDREN => WHILE RECEIVING
/*

    import React from 'react'
    
    const Child = ({children}) => {
        
      return (
        <>
            {children}
        </>
      )
    }
    export default Child

*/

// -------------------------------------------------------
// **IMP
// DEFAULT PROPS => 1ST WAY
/*

    import React from 'react'

    const Child = (props) => {
        console.log(props);

        let {item="Car", cost=50000, rating=2} = props
        
        return (
            <>
                <h1>Item = {item}</h1>
                <h1>Cost = {cost}</h1>
                <h1>Rating = {rating}</h1>
            </>
        )
    }
    export default Child

*/

// -------------------------------------------------------
// **IMP
// DEFAULT PROPS => 2ND WAY
// /*

    import React from 'react'

    const Child = (props) => {
        console.log(props);

        let {item, cost, rating} = props
        
        return (
            <>
                <h1>Item = {item || "Car"}</h1>
                <h1>Cost = {cost || 50000}</h1>
                <h1>Rating = {rating || 2}</h1>
            </>
        )
    }
    export default Child

// */