// ---------------------------------
// **IMP
// **CONTROLLED FORM
/*

// storing "diff input data" under diff state variable
// take "diff state" then "func" passed to onChange event must be "diff"
import React, { useState } from 'react'

const Controlled = () => {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    let handleName = (event) => {
        console.log(event);
        setUserName(event.target.value)
    }

    let handleEmail = (event) => {
        console.log(event);
        setUserEmail(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault() 
        // STOPS THE AUTO-RELOADING OF FORM
            // BCZ when we click on sumbit, entire form will be vanished/cleared
            // so to prevent this, we stop reloading.

        console.log(userName);
        console.log(userEmail);
          
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>
                    CONTROLLED FORM
                </h1>
                <div>
                    <label htmlFor='uname'>USERNAME : </label>
                    <input type='text' id="uname" onChange={handleName}></input>
                </div>
                <div>
                    <label htmlFor='uemail'>UEMAIL : </label>
                    <input type='email' id="uemail" onChange={handleEmail}></input>
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

// storing "diff input data" under same state variable
// take "same state" then "func" passed to onChange event must be "same"
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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
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