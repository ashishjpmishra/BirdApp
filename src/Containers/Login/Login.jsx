import React , {useState} from 'react'
import {Link} from 'react-router-dom'

function Login(props) {

    const {isLoggedIn, setIsLoggedIn} = props
    console.log(isLoggedIn)

    let allUsers = localStorage.getItem("allUsers") === null? [] : JSON.parse(localStorage.getItem("allUsers"));

    const handleLoginSubmit = (e) =>{
        e.preventDefault()

        const data= {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        console.log(allUsers)
        for(let i=0; i<allUsers.length; i++){
            if(allUsers[i].username === data.username && allUsers[i].password === data.password){
                const loggedIn = allUsers[i].username
                localStorage.setItem("loggedIn", JSON.stringify(loggedIn))
                setIsLoggedIn(true)
            }
        }
    }

	return (
		<div className="flex h-screen">
			<div className="w-2/3 h-screen relative overflow-hidden">
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" />
                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" className="w-2/5 absolute inset-1/4" />
            </div>
			<div className="w-1/3">
                <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" className=" m-8 w-16 h-16" />
                <h1 className="text-5xl font-extrabold text-center">Happening now</h1>
                <h1 className="text-xl mt-4 font-Normal text-center">Login</h1>
                <form onSubmit={(e)=>handleLoginSubmit(e)} className="w-2/3 my-0 mx-auto p-8">
                    <label>Username</label>
                    <input className="my-4 bg-gray-900 rounded-full" type="text" name="username" />
                    <label>Password</label>
                    <input className="my-4 bg-gray-900 rounded-full" type="password" name="password"/>
                    <button className="px-8 py-2 bg-[#1DA1F2] rounded-full">Login</button><br />
                    <label>No account? </label>
                    <Link to="./register"><button className="text-red-400">Sign Up Instead</button></Link>
                </form>
            </div>
		</div>
	)
}

export default Login
