import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import styles from "../../styles/style.js"
import { Link } from 'react-router-dom'
import { toast } from "react-hot-toast"
import { CgSpinner } from 'react-icons/cg';

import { RxAvatar } from "react-icons/rx"
import axios from 'axios'
import { server } from '../../server.js'
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const [loading, setLoading] = useState(false)

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
    }
    var count = 0;
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        count += 1;
        console.log(count);
        if (count === 1) {
            const config = { headers: { "Content-Type": "multipart/form-data" } }
            var formData = new FormData();
            formData.append("name", name)
            formData.append("email", email)
            formData.append("password", password)
            formData.append("file", avatar)
            try {
                const res = await axios.post(`${server}/create-user`, formData, config)
                const value = res.data
                switch (value.statusCode) {
                    case 400:
                        toast.error(value.message)
                        setLoading(false)
                        break;
                    case 404:
                        toast.error(value.message)
                        setLoading(false)
                        break;
                    case 200:
                        toast.success(value.message)
                        setLoading(false)
                        break;
                    case 201:
                        toast.success(value.message)
                        setLoading(false)
                        break;
                    default:
                        toast.error('unknown error');
                        setLoading(false)
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error('already sent mail for conformation.')
        }

    }
    return (
        <>
            <div className='min-h-screen bg-gray-50  flex flex-col justify-center py-12 sm:px-6 lg:px-8 '>

                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                        Register as new user
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form action="" method='post' onSubmit={handleSubmit} className="space-y-6 ">
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700 '>
                                    Name <span className='text-red-500 text-lg'>*</span>
                                </label>
                                <div className="mt-1">
                                    <input type="text"
                                        name="name"
                                        autoComplete='name'
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    />

                                </div>
                            </div>
                            {/* 2nd one email */}
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700 '>
                                    Email address <span className='text-red-500 text-lg'>*</span>
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
                            {/* 3nd one password*/}
                            <div>
                                <label htmlFor="password" className='block text-sm font-medium text-gray-700 '>
                                    password <span className='text-red-500 text-lg'>*</span>
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
                            {/* upload file */}
                            <div className="avatar">
                                <label htmlFor="avatar"
                                    className='block text-sm font-medium text-gray-700'></label>
                                <div className="mt-2 flex items-center">
                                    <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                        {/* <span className='text-red-500 text-lg '>*</span> */}
                                        {avatar ? (
                                            <img src={URL.createObjectURL(avatar)} alt='avatar' className='h-full w-full object-cover rounded-full' />
                                        )
                                            : (
                                                <RxAvatar className='h-8 w-8' />
                                            )
                                        }
                                    </span>
                                    <label htmlFor="file-input"
                                        className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium  text-gray-700 bg-white hover:bg-gray-50'>
                                        <span>Upload a file</span>
                                        <input type="file" name='avatar' id='file-input' accept='.jpg,.jpeg,.png'
                                            onChange={handleFileInputChange}
                                            className='sr-only' />
                                    </label>

                                </div>
                            </div>
                            <div>
                                <button type='submit'
                                    className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                                >Submit {loading && <CgSpinner size={20} className="spinner" />}</button>
                            </div>
                            <div className={`${styles.noramlFlex}  w-full`}>
                                <h4>Already have an account</h4>
                                <Link to="/login" className="text-blue-600 pl-2">Login</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp