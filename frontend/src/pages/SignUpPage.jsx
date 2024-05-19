import React, { useEffect } from 'react'
import SignUp from "../components/Login/SignUp.jsx"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUpPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(state => state.user);
    useEffect(() => {
      if (isAuthenticated === true) {
        navigate("/");
      }
    }, [isAuthenticated])
    return (
        <div>
            <SignUp />
        </div>
    )
}

export default SignUpPage