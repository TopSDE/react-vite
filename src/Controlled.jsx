// ---------------------------------
// **IMP
// **CONTROLLED FORM
/*

import React from 'react'

const Controlled = () => {

    let handleSubmit = (event) => {
        event.preventDefault() // STOPS THE AUTO-RELOADING OF FORM      
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>
                    CONTROLLED FORM
                </h1>
                <div>
                    <label htmlFor='uname'>USERNAME : </label>
                    <input type='text' id="uname"></input>
                </div>
                <div>
                    <label htmlFor='uemail'>UEMAIL : </label>
                    <input type='email' id="uemail"></input>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </>
    )
}
export default Controlled
*/

// ---------------------------------
// **IMP
// **CONTROLLED FORM
// /*
import React, { useState } from 'react'

const Controlled = () => {

    const [formData, setFormData] = useState({
        userName: "",
        userEmail : "",
        gender: "",
        degree: ""
    })

    const {userName, userEmail, gender, degree} = formData

    let handleChange = (event) => {
        let {name, value} = event.target
        setFormData({[name]:value})
    }
    
    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(event);
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>CONTROLLED FORM</h1>
                <div>
                    <label htmlFor='uname'>USER NAME : </label>
                    <input
                        type="text"
                        id='uname'
                        name='userName'
                        value={userName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='uemail'>USER EMAIL : </label>
                    <input
                        type="text"
                        id='uemail'
                        name='userEmail'
                        value={userEmail}
                        onChange={handleChange}
                    />
                </div>
                <div value={gender} onChange={handleChange}>
                    <label htmlFor=''>GENDER : </label>
                    <input type="radio" name="gender" value="male"/>MALE
                    <input type="radio" name="gender" value="female"/>FEMALE
                    <input type="radio" name="gender" value="others"/>OTHERS
                </div>
                <div>
                    <label htmlFor="deg">DEGREE : </label>
                    <select name="degree" id="deg" value={degree} onChange={handleChange}>
                        <option value="" disabled>---SELECT---</option>
                        <option value="MBA">MBA</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="B.E">B.E</option>
                    </select>
                </div>
                <div>
                    <button>SUBMIT</button>
                </div>
            </form>
        </>
    )
}
export default Controlled

// */