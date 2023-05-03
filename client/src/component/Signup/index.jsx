import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { UilUser,UilAt,UilLock,UilFacebookF,UilGoogle,UilTwitter, UilGithub} from '@iconscout/react-unicons'

const Signup=()=>{
    const [data, setData]=useState({
        firstName:"",
        lastName:"",
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
            const url="http://localhost:5000/api/users";
            const{data:res}=await axios.post(url, data);
            navigate("/login")
            console.log(res.message);
        }catch(error){
            if(error.response && error.response.status>=400 && error.response.status <=500)
            {
                setError(error.response.data.message);
            }
        }
    }

    return(
        <div class="min-h-screen bg-blue-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-cyan-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div class="absolute w-48 h-48 rounded-xl bg-cyan-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <div class=" py-6 px-2 sm:py-12 sm:px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                <p class="w-auto sm:w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Welcome!
                </p>
            </div>
            <div class="space-y-4">
                <div class="flex flex-row"  >
                    <UilUser size={30} class="text-violet-600"/>
                    <input type="text" placeholder="First Name" name='firstName' value={data.firstName} onChange={handleChange} class="block text-sm py-2 px-4 rounded-lg w-full border outline-none"/>
                    
                </div>
                <div class="ml-7">
                    <input type="text" placeholder="Last Name" name='lastName' value={data.lastName} onChange={handleChange} class="block text-sm py-2 px-4 rounded-lg w-full border outline-none" />
                </div>
                
                <div class="flex flex-row"  >
                    <UilAt size={30} class="text-violet-600"/>
                    <input type="email" placeholder="email" name='email' value={data.email} onChange={handleChange} class="block text-sm py-2 px-4 rounded-lg w-full border outline-none" />
                </div>
                
                <div class="flex flex-row" >
                    <UilLock size={30} class="text-violet-600"/>
                    <input type="password" placeholder="Password" name='password' value={data.password} onChange={handleChange} class="block text-sm py-2 px-4 rounded-lg w-full border outline-none" />
                </div>
            </div>
                {error &&<p class="mt-4 text-center text-sm font-semibold text-red-600">{error}</p>}
                <div class="text-center mt-6">
                    <button  onClick={handleSubmit} class="py-3 w-60 text-xl text-white bg-violet-600 rounded-2xl">
                        Create Account
                    </button>
                    <p class="mt-4 text-sm">Already Have An Account? 
                        <span class="underline cursor-pointer mx-2">
                            <Link to="/login">
                                <button type='button' class="text-violet-600" >
                                    Sign in
                                </button>
                            </Link>
                        </span>
                    </p>
                    <div class="flex flex-row items-center justify-center p-1 mt-1">
                        <UilFacebookF class="mx-1 text-blue-600"/>
                        <UilGoogle class="mx-1  text-blue-600"/>
                        <UilTwitter class="mx-1  text-blue-600"/>
                        <UilGithub class="mx-1  text-blue-600"/>
                    </div>
                </div>
            </div>
            <div class="w-40 h-40 absolute bg-violet-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div
                class="w-20 h-40 absolute bg-violet-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </div>
    )
}

export default Signup;