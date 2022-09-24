import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import LandingPage from './Containers/LandingPage/LandingPage'
import Login from './Containers/Login/Login'
import Register from './Containers/Register/Register'


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [registered, setRegistered] = useState(false)

	return (
        <BrowserRouter>
		<div className="w-screen bg-black text-white">
            <Routes>
                <Route exact path="/" element={isLoggedIn ? <LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} registered={registered} setRegistered={setRegistered}  /> :<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/register" element={<Register />} />
                <Route path="/register" element={registered ? <Navigate to="/" /> :<Register registered={registered} setRegistered={setRegistered} />} />
                <Route path="/dashboard" element={<LandingPage />} />
            </Routes>
		</div>
        </BrowserRouter>
	)
}

export default App
