import React, { useContext ,useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Context} from "../../Context"
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const Signin = () => {
   const {state ,signin,regexPass,regexUsername ,getCookie,isValidToken,tokeValid}=useContext(Context);
   const [firstRender, setFirstRender] = useState(false);
   const navigate = useNavigate();
   
   const [errorHandler ,setErrorHandler]=useState({
    usernameError:"",
    passwordError:"",
    showAlert:false
})
const data = getCookie();
  const user = data?jwt_decode(data) : "";

  useEffect(() => {
    if (!firstRender) {
      isValidToken(getCookie());   
      setFirstRender(true)
    }
  }, [getCookie, isValidToken ,firstRender ,tokeValid]);
  tokeValid?(user.roles[0].authority==="Admin"?navigate("/admin"):
  user.roles[0].authority==="Vendeur-livreur"?navigate("/vendeur"):console.log("aucun role")):console.log("pas connécté")
    return (
        <section className="py-3 bg-gray-50 sm:py-3 lg:py-3">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Bienvenue !</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">connectez vous a votre compte</p>
            </div>
            {errorHandler.showAlert?
            (<div className="py-5 bg-transparent">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto">
                    <div className="border border-yellow-300 rounded-lg bg-yellow-50">
                        <div className="p-3">
                            <div className="flex items-start justify-between">
                                <svg className="flex-shrink-0 w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-yellow-900">Info</p>
                                    <p className="text-sm mt-0.5 font-medium text-yellow-900">Vérifiez que les informations de connexion fournies sont celles qui ont été données lors de la création du compte.</p>
                                </div>

                                <div className="pl-3 ml-auto">
                                    <button type="button" className="inline-flex bg-yellow-50 rounded-lg -m1.5 p-1.5 text-yellow-500 hover:bg-yellow-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-500" onClick={() => setErrorHandler({
                                        ...errorHandler,
                                        showAlert:false
                                        })}>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>):null
            }
            <div className="relative max-w-md mx-auto mt-8 md:mt-8">
                <div className="overflow-hidden bg-white rounded-md shadow-md">
                    <div className="px-4 py-6 sm:px-8 sm:py-7">
                        <form action="#" method="POST">
                            <div className="space-y-5">
                                <div>
                                    <label for="" className="text-base font-medium text-gray-900"> Username </label>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
    
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            onChange={(e)=>{
                                               state.username = e.target.value;  
                                               setErrorHandler({
                                                ...errorHandler,
                                                usernameError:state.username
                                               })
                                            }}
                                            placeholder="Entrez votre nom d' utilisateur"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                        />
                                    </div>
                                </div>
    
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label for="" className="text-base font-medium text-gray-900"> Password </label>
    
                                        <Link href="#" title="" className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"> mot de passe oublié? </Link>
                                    </div>
                                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
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
                                            onChange={(e)=>{
                                                state.password=e.target.value;
                                                setErrorHandler({
                                                    ...errorHandler,
                                                    passwordError:state.password
                                                })

                                            }}
                                            placeholder="Enter your password"
                                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                        />
                                    </div>
                                </div>
    
                                <div>
                                    <button type="submit" 
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            if(!regexUsername.test(errorHandler.usernameError)&& !regexPass.test(errorHandler.passwordError)){
                                                setErrorHandler({
                                                    ...errorHandler,
                                                   showAlert:true
                                                })
                                            }else{
                                                signin()  
                                               
                                            }  
                                               
                                           
                                        }}
                                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                        connectez-vous
                                    </button>
                                </div>
    
                                <div className="text-center">
                                    <p className="text-base text-gray-600">Pas de compte? <Link to="/signup" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Creer votre compte</Link></p>
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

export default Signin;