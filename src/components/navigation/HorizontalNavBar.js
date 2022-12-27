
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {Context} from "../../Context"
import jwt_decode from "jwt-decode";
const HorizontalNavBar = () => {
    const {token}=useContext(Context)
    const [activeLink, setActiveLink] = useState('');
    const handleClick = (path) => {
        setActiveLink(path);
      };
    const user= token?jwt_decode(token):"";
    return (
        <div className="px-4 mx-auto mt-5 sm:px-6 md:px-8">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
                <nav className="flex -mb-px space-x-10">
                   
                   {token?(user.role[0].authority)==="Vendeur-livreur"?(
                     <>
                     <Link  href="/vendeur/addproduit"  onClick={()=> handleClick('/admin/addcategorie')} to="/vendeur/addproduit" className={`py-4 text-sm font-medium ${activeLink==="/admin/addcategorie"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}  >Produit</Link>
                     <Link  href="/vendeur/addproduit"  onClick={()=> handleClick('/vendeur/boutique')} to="/vendeur/boutique" className={`py-4 text-sm font-medium ${activeLink==="/vendeur/boutique"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}  >Boutique</Link>
                   </>
                   ):(
                    <>
                    <Link  href="/admin/addcategorie"  onClick={()=> handleClick('/admin/addcategorie')} to="/admin/addcategorie" className={`py-4 text-sm font-medium ${activeLink==="/admin/addcategorie"?' text-indigo-600  border-indigo-600':' text-gray-500  border-transparent hover:border-gray-300 ' } transition-all duration-200  border-b-2  whitespace-nowrap`}  > Categorie</Link>
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