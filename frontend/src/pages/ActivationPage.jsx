import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../server';
import { Toaster, toast } from "react-hot-toast"

const ActivationPage = () => {
    const { activation_token } = useParams();
    const [err, setErr] = useState(false);
    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`${server}/activation`, { activation_token })
                    if (res.data.message === "jwt expired" || res.data.message === "invalid token") {
                        toast.error(res.data.message)
                        setErr(true)
                    }
                } catch (err) {
                    setErr(true)
                    console.log(err);
                }
            }
            activationEmail()
        }
    }, [activation_token])
    return (
        <div style={{
            widows: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Toaster/>
            {err ? (
                <p>your token is expired! or Invalid!</p>
            ) : (
                <p>Your account has been created sucessfully</p>
            )}
        </div>
    )
}

export default ActivationPage