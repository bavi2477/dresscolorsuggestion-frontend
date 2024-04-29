import axios from 'axios';
import React, { useState } from 'react';

const GetCallUsingToken = ({token, setUserId}) => {
    const[responseData, setResponseData] = useState([])
    const [responseMsg, setResponseMsg] = useState('')
    const handleSubmit = async() => {
        await axios.get('http://localhost:4000/api/user/getuser',{
            headers:{
                Authorization: `${token}`
            }
        })
        .then ((res) => {
            setResponseData(res.data.data)
            setResponseMsg(res.data.message)
            setUserId(res.data.data[0]._id)

        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <h1>getcall</h1>
            <button onClick={handleSubmit}>user detail</button>
            <h1>{responseMsg}</h1>
            

        </div>
    );
};

export default GetCallUsingToken;