import React, {useState} from 'react'

const StateComponent = () => {
    let [developer, setDeveloper] = useState("Punith")

    return (
        <>
            <h1>State : {developer}</h1>
        </>
    )
}

export default StateComponent