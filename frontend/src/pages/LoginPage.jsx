import React, { useEffect } from 'react'
import Login from "../components/Login/Login.jsx"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.user);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate('/');
    }
  }, [])
  return (
    <div >
      <Login />
    </div>
  )
}

export default LoginPage