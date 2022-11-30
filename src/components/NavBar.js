
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from'../images/fullStack.png'
const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const Links = [
        {
          to :"/product",
          name:"Produits"
        }
        ,
        {
            to :"/categorie",
            name:"Categorie"
        },
        {
            to :"/boutique",
            name:"Boutique"
          }
      ]
      
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
                <Link href="/"  to ="/" title="" className="flex">
                    <img className="w-auto h-9 lg:h-11" src={logo} alt="" />
                </Link>
            </div>

            <button type="button" 
                 onClick={()=>setNavbar(navbar)}
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                
            </button>
            
            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
             
             {
                Links?.map(({ to ,name }, id)=>{
                   return( <Link key={id} to={to} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                         {name}
                    </Link>)
                })
             }
                
             
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <Link to="/signup" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Sign up
                </Link>
                <Link to="/signin" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Sign in
                </Link>
            </div>
        </nav>

        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
              
        {
                Links?.map(({ to ,name }, id)=>{
                   return( <Link key={id} to={to} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                         {name}
                    </Link>)
                })
             }
                
             
        </nav>
    </div>
    );
};

export default NavBar;