// ---------------------------------
// **IMP
// **key-props
/*

import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const AxiosLibrary = () => {
    const [user, setUser] = useState([]);

    // resolve the promise --> async & await
    const getApi = async () => {
        const { data } = await axios.get("https://api.github.com/users");
        setUser(data);
    };

    console.log("state", user);

    // fetch data from api --> side-effect --> useEffect
    // [] --> "componentDidMount" --> "executes once"
    useEffect(() => {
        try {
            getApi();
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>LOGIN</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((val) => {
                        // console.log("current val", val);
                        return (
                        <Fragment key={val.id}>
                            <tr>
                                <td>{val.id}</td>
                                <td>
                                    <img
                                    src={val.avatar_url}
                                    alt=""
                                    height="300px"
                                    width="300px"
                                    />
                                </td>
                                <td>{val.login}</td>
                            </tr>
                        </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
export default AxiosLibrary

*/