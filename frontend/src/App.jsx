import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage, SignUpPage, ActivationPage, HomePage, ProductsPage, BestSelling, Events, FAQ } from './routes'
import "./app.css"
import { Toaster, toast } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from './redux/reducers/UserSlice'
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.user);
  useEffect(() => {
    dispatch(userFetch())
    if (state?.statusCode === 200) {
      toast.success("user logged in sucessfully.")
    } else {
      toast.error("please login to continue")
    }
  }, [])
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/best-selling' element={<BestSelling />} />
          <Route path='/events' element={<Events />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/activation/:activation_token' element={<ActivationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App