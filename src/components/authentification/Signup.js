import React ,{ useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Context} from "../../Context"


const Signup = () => {
    const {state ,signup}=useContext(Context)
    
    const[alertUserName ,setAlertUserName]=useState(true);
    const[alertPassword ,setAlertPassword]=useState(true)
    useEffect(()=>{
       setAlertUserName(state.username.length>3 ? true : false );
       setAlertPassword(state.password.length>7?true :false )
    },[state.password ,state.username,state.lastName,state.firstName])

    
    return (
        <section className="py-7 bg-gray-50 sm:py-12 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-5 lg:px-7">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Creer un compte</h2>
            </div>
    
            <div className="relative max-w-md mx-auto mt-6 md:mt-14">
                <div className="overflow-hidden bg-white rounded-md shadow-md">
                    <div className="px-4 py-6 sm:px-8 sm:py-7">
                        <form action="#" method="POST">
                            <div className="space-y-5">
                                <div>
                                    <label for="" className="text-base font-medium text-gray-900"> Username</label>
                                    <div className="mt-2 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
    
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Entrez votre nom d'utilisateur"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            onChange = {(e) =>{state.username=e.target.value}}
                                        />
                                    </div>
                                    <span hidden={alertUserName} className="text-base font-medium text-red-900">Le username doit faire aumoins 3 caracteres</span>
                                </div>
                                <div className='flex flex-wrap -mx-2 mb-2'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label for="" className="text-base font-medium text-gray-900">Prenom </label>
                                    <div className="mt-2 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
    
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Entrez votre Prenom"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            onChange = {(e)=>{state.firstName=e.target.value}  }
                                        />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label for="" className="text-base font-medium text-gray-900">Nom </label>
                                    <div className="mt-2 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
    
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Entrez votre Nom"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            onChange = {(e) => {state.lastName=e.target.value}}
                                        />
                                    </div>
                                </div>

                                </div>
                               
    
                                <div>
                                    <label for="" className="text-base font-medium text-gray-900"> Password </label>
                                    <div className="mt-2 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                />
                                            </svg>
                                        </div>
    
                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            placeholder="Enter your password"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            onChange = {(e) => {state.password=e.target.value}}
                                        />
                                    </div>
                                    <span hidden={alertPassword} className="text-base font-medium text-red-900">Le mot de passe  doit faire aumoins 8 caracteres</span>
                                </div>
    
                           
    
                                <div>
                                    <button onClick={(e)=>{
                                        e.preventDefault();
                                        signup()
                                    }} type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                        Creer un Compte
                                    </button>
                                </div>
    
                                <div className="text-center">
                                    <p className="text-base text-gray-600">Deja un compte ? <Link to="/signin" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">connectez-vous</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Signup;