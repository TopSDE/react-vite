// ---------------------------------
// **IMP
// CONTEXT API
// /*

import React, { createContext, useState } from 'react'
import MyProfile from '../task/MyProfile'

export let ProfileApi = createContext()

const ProfileContext = () => {

    let employee = "Punith"
    let [salary, setSalary] = useState(500000)
    let [company, setCompany] = useState("Anz")

    let salIncrement = () => {
        setSalary(salary + 10000)
    }

    let shiftCompany = () => {
        setCompany("XYZ")
    }

    return (
        <ProfileApi.Provider value={{employee, salary, company, salIncrement, shiftCompany}}>
            <MyProfile/>
        </ProfileApi.Provider>
    )
}
export default ProfileContext

// */