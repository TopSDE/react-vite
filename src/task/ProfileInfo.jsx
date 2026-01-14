import React from 'react'
import MyProfile from "./MyProfile"
import imgUrl from "../images/BMW M5.jpg"

const ProfileInfo = () => {
  let player = {
        firstName : "Mahendra",
        middleName : "Singh",
        lastName : "Dhoni",
        nation : "India",
        age : 40,
        photo : imgUrl
    }

    return (
        <>
            <MyProfile info={player}>
                <h3>This is children</h3>
                <h3>This is children</h3>
            </MyProfile>
        </>
    )
}
export default ProfileInfo