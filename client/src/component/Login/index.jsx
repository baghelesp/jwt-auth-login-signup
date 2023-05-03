import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { UilUser,UilAt,UilLock,UilFacebookF,UilGoogle,UilTwitter, UilGithub} from '@iconscout/react-unicons'


const Login=()=>{
    const [data, setData]=useState({
        email:"",
        password:"",
    })

    const[error, setError]=useState("");

    const navigate=useNavigate();

    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/auth";
            const{data:res}=await axios.post(url, data);
            localStorage.setItem("token", res.data);
            localStorage.setItem("userData", res.name);
            
            window.location="/"
            
        }catch(error){
            if(error.response && error.response.status>=400 && error.response.status<=500)
            {
                setError(error.response.data.message)
            }
        }
    }

    return(
        <div class="min-h-screen bg-teal-500 flex justify-center items-center ">
        <div class="absolute w-60 h-60 rounded-xl bg-cyan-200 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div class="absolute w-48 h-48 rounded-xl bg-green-200 -bottom-5 -right-10 z-0 transform rotate-12 hidden md:block">
        </div>
        <div class=" py-7 px-4  sm:py-12 sm:px-12  bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
                <p class="w-auto sm:w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                    account to enjoy all the services without any ads for free!</p>
            </div>
            <div class="space-y-4">
        <div class="flex flex-row"  >
            <UilAt size={30} class="text-teal-600"/>
            <input type="email" placeholder="email" name='email' value={data.email} onChange={handleChange} class="block text-sm py-2 px-4 rounded-lg w-full border outline-none" />
        </div>
        
        <div class="flex flex-row" >
            <UilLock size={30} class="text-teal-600 "/>
            <input type="password" placeholder="Password" name='password' value={data.password} onChange={handleChange} class="block text-sm py-2 px-4 rounded-lg w-full border outline-none" />
        </div>
            </div>
                {error &&<p class="mt-4 text-center text-sm font-semibold text-red-600">{error}</p>}
                <div class="text-center mt-6">

                    <button type="submit" onClick={handleSubmit} class="py-3 w-64 text-xl text-white bg-teal-600 rounded-2xl">
                        login
                    </button>
                    <p class="mt-4 text-sm">Dont have an Account? 
                        <span class="underline cursor-pointer mx-2">
                            <Link to="/Signup">
                                <button type='button' class="text-blue-700 font-semibold" >
                                    Sign up!
                                </button>
                            </Link>
                        </span>
                    </p>
                    <div class="flex flex-row items-center justify-center p-1 m-1">
                        <UilFacebookF class="mx-1 text-blue-600"/>
                        <UilGoogle class="mx-1  text-blue-600"/>
                        <UilTwitter class="mx-1  text-blue-600"/>
                        <UilGithub class="mx-1  text-blue-600"/>
                    </div>
                </div>
            </div>
            <div class="w-40 h-40 absolute bg-blue-200 rounded-full top-0 right-12 hidden md:block"></div>
            <div
                class="w-20 h-40 absolute bg-emerald-100 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </div>
    )
}

export default Login;