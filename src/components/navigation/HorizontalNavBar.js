
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import { Context } from '../../Context';
const HorizontalNavBar = () => {
    
    const [activeLink, setActiveLink] = useState('');
    const handleClick = (path) => {
        setActiveLink(path);
      };
      const { getCookie, isValidToken, tokeValid } = useContext(Context);
      const [firstRender, setFirstRender] = useState(false);
      const data =getCookie();
      const user = data ? jwt_decode(data) : "";
    
      useEffect(() => {
        if (!firstRender) {
          console.log("le token", getCookie());
          isValidToken(getCookie());   
          setFirstRender(true)
        }
      }, [getCookie, isValidToken ,firstRender]);
      console.log("c' est valide", tokeValid);
    return (
        
        <div className="px-4 mx-auto mt-2 sm:px-6 md:px-8">
          
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
                <nav className="flex -mb-px space-x-10">
                   
                   {(user.roles[0].authority)==="Vendeur-livreur"?(
                     <>
                     <Link  href="/vendeur/addproduit"  onClick={()=> handleClick('/vendeur/addproduit')} to="/vendeur/addproduit" className={`py-4 text-sm font-medium ${activeLink==="/vendeur/addproduit"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}  >Produit</Link>
                     <Link  href="/vendeur/addboutique"  onClick={()=> handleClick('/vendeur/addboutique')} to="/vendeur/addboutique" className={`py-4 text-sm font-medium ${activeLink==="/vendeur/addboutique"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}  >Boutique</Link>
                   </>
                   ):user.roles[0].authority==="Admin"?(
                    <>
                    <Link  href="/admin/addcategorie" onClick={()=> handleClick('/admin/addcategorie')} to="/admin/addcategorie" className={`py-4 text-sm font-medium ${activeLink==="/admin/addcategorie"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}> Categorie</Link>
                    <Link  href="/admin/alluser"  onClick={()=> handleClick('/admin/alluser')} to="/admin/alluser" className={`py-4 text-sm font-medium ${activeLink==="/admin/alluser"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}  > All user</Link>
                    </>
                   ):"Vous ne verrez rien"}
                     
                </nav>
            </div>
        </div>
        </div>
    );
};

export default HorizontalNavBar;