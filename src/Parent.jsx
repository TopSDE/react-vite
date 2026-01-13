// **IMP
// PROPS DESTRUCTURING - SENDING "MULTIPLE VAL" AS "PROP VAL"
// /*

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

// */