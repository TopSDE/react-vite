// ------------------------------------------------------------------
// **IMP
// 05/02/26
// /*

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';

const ViewAll = () => {

    const [student, setStudent] = useState([])

    //resolve promise-->async & await
    const getApi = async () => {
        const { data } = await axios.get("http://localhost:5000/student")
        setStudent(data)
    }

    console.log("state", student);

    //! ************delete student detail ************************
        const deleteStu = (id) => {
        console.log("Id of student to be deleted", id);
        axios.delete("http://localhost:5000/student/" + id).then(() => {
            getApi() //?display all remaining val back on UI
        }).catch((e) => {
            console.log(e);
        })
        }
        //! ************delete student detail ************************

    //fetching data from server-->side-effect-->useEffect
    //??[]-->componentDidMount-->"executes once"
    useEffect(() => {
        try {
        getApi()
        } catch (e) {
        console.log(e);
        }
    }, [])

    return (
        <>
        <section>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>STUDENT NAME</th>
                <th>STUDENT EMAIL</th>
                <th>MORE OPTION</th>
                </tr>
            </thead>
            <tbody>
                {student.map(val => {
                // console.log("current val", val); //obj
                return (
                    <Fragment key={val.id}>
                    <tr>
                        <td>{val.id}</td>
                        <td>{val.stuname}</td>
                        <td>{val.stuemail}</td>
                        <td>
                        <button>EDIT</button>
                        <button onClick={() => { deleteStu(val.id) }}>DELETE</button>
                        </td>
                    </tr>
                    </Fragment>
                );
                })}
            </tbody>
            </table>
        </section>
        </>
    );
}
export default ViewAll;
// */