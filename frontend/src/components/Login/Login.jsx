import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import styles from "../../styles/style.js"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"
import axios from 'axios'
import { server } from '../../server.js'
import { CgSpinner } from 'react-icons/cg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const res = await axios.post(`${server}/login-user`, { email, password }, { withCredentials: true, headers: { "Content-Type": "application/json" } })
        switch (res.data.statusCode) {
            case 400:
                toast.error(res.data.message)
                setLoading(false)
                break;
            case 201:
                toast.success(res.data.message)
                setLoading(false)
                navigate('/')
                break;
            default:
                toast.error("Unkown error try again later")
                setLoading(false)
                break;
        }
    }

    return (
        <>
            <div className='min-h-screen bg-gray-50  flex flex-col justify-center py-12 sm:px-6 lg:px-8 '>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                        login to your account
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form action="" className="space-y-6 " onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700 '>
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input type="email"
                                        name="email"
                                        autoComplete='email'
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    />

                                </div>
                            </div>
                            {/* 2nd one */}
                            <div>
                                <label htmlFor="password" className='block text-sm font-medium text-gray-700 '>
                                    password
                                </label>
                                <div className="mt-1 relative">
                                    <input type={visible ? "text" : "password"}
                                        name="password"
                                        autoComplete='current-password'
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    />
                                    {visible ? (
                                        <AiOutlineEye
                                            className='absolute right-2 top-2 cursor-pointer'
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className='absolute right-2 top-2 cursor-pointer'
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>
                            </div>
                            {/* button */}
                            <div className={`${styles.noramlFlex} justify-between`}>
                                <div className={`${styles.noramlFlex} justify-between`}>
                                    <input type="checkbox" name="remember-me" id="remember-me"
                                        className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />

                                    <label htmlFor="remember-me" className='ml-2 block text-sm text-gray-900'> Remember Me</label>
                                </div>
                                <a href='.forgot-password'
                                    className='font-medium text-blue-600 hover:text-blue-500' >
                                    forgot your password?
                                </a>

                            </div>
                            <div>
                                <button type='submit'
                                    className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                                >submit {loading && <CgSpinner size={20} className="spinner" />}</button>
                            </div>
                            <div className={`${styles.noramlFlex}`}>
                                <h4>Not have an account</h4>
                                <Link to="/sign-up" className="text-blue-600 pl-2">Sign Up</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login