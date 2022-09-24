import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Register(props) {

    const {registered, setRegistered} = props

    

    let allUsers = localStorage.getItem("allUsers") === null? [] : JSON.parse(localStorage.getItem("allUsers"));

    const handleSignUpSubmit = (e) =>{
        e.preventDefault()
        const data= {
            username: e.target.username.value,
            password: e.target.password.value,
        }

        for(let i=0; i<allUsers.length; i++){
            if(allUsers[i].username === data.username){
                alert(`${data.username} is not available, enter unique username`)
                return false
            }
        }

        allUsers.push(data)
        localStorage.setItem("allUsers", JSON.stringify(allUsers))
        setRegistered(true)
    }

	return (
		<div className="flex">
			<div className="w-max h-screen relative overflow-hidden">
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" />
                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" className="w-2/5 absolute inset-1/4" />
            </div>
			<div className="w-1/3">
                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" className=" m-8 w-16 h-16" />
                <h1 className="text-5xl font-extrabold text-center">Happening now</h1>
                <h1 className="text-xl mt-4 font-Normal text-center">Register</h1>
                <form onSubmit={(e)=>handleSignUpSubmit(e)} className="w-2/3 my-0 mx-auto p-8">
                    <label>Username</label>
                    <input className="my-4 bg-gray-900 rounded-full" type="text" name="username" required/>
                    <label>Password</label>
                    <input className="my-4 bg-gray-900 rounded-full" type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                    <button className="px-8 py-2 bg-[#1DA1F2] rounded-full">Sign Up</button>
                </form>
                <Link to="/"><button className="mx-4 text-green-500"> Registered? Login Now</button></Link>
            </div>
		</div>
	)
}

export default Register
