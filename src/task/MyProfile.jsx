import React from 'react'

const MyProfile = (props) => {
    console.log(props);
    
    let {info: {firstName, middleName, lastName, nation, age, photo, match="India", run}, children} = props

    return (
        <>
            <section>
                <h1>
                    Profile of {firstName} {middleName} {lastName}
                </h1>
                <img src={photo} alt='' height="300px" width="500px"></img>
                <h2>
                    Nation is = {nation}
                </h2>
                <h2>
                    Age is = {age}
                </h2>
                <h2>
                    Match : {match}, Runs : {run || 100}
                </h2>
                
                {children}

            </section>
        </>
    )
}

export default MyProfile