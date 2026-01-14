// **IMP
// PROPS DESTRUCTURING - SENDING "MULTIPLE VAL" AS "PROP VAL"
/*

    import React from 'react'
    import Child from "./Child"
    
    const Parent = () => {
        let employee = "Punith"
        let company = "Uber"
        let salary = 200000

        let tech1 = "ReactJS"
        let tech2 = "DSA"
        let tech3 = "Python"

        return (
            <>
                <Child
                empDetails={{employee, company, salary}}
                empSkills={[tech1, tech2, tech3]}
                />  
            </>
        )
    }
    export default Parent

*/

// ---------------------------------
// **IMP
// PROPS CHILDREN
/*

    import React from 'react'
    import Child from './Child'

    const Parent = () => {

        return (
            <>
            <Child>
                <h1>
                    Understanding props Children
                </h1>
                <p>
                    One of subconcept of Props
                </p>
            </Child>
            </>
        )

    }
    export default Parent

*/

// -------------------------------------------------------
// **IMP
// DEFAULT PROPS => 1ST WAY
/*

    import React from 'react'
    import Child from './Child'

    const Parent = () => {

        return (
            <>
            <Child 
            rating={4}
            />   
            </>
        )

    }
    export default Parent

*/

// ---------------------------------
// **IMP
// DEFAULT PROPS => 2ND WAY
// /*

    import React from 'react'
    import Child from './Child'

    const Parent = () => {

        return (
            <>
            <Child 
            rating={5}
            />   
            </>
        )

    }
    export default Parent

// */