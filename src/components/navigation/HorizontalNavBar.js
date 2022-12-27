import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalNavBar = () => {
    return (
        <div className="px-4 mx-auto mt-5 sm:px-6 md:px-8">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
                <nav className="flex -mb-px space-x-10">
                    <Link href="/admin/addcategorie" to="/admin/addcategorie" className="py-4 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600 whitespace-nowrap"> Categorie</Link>

                    <Link  href="/vendeur/addproduit" to="/vendeur/addproduit" className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Ajout Produit </Link>


                    <Link href="#" className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"> Boutique </Link>
                </nav>
            </div>
        </div>
        </div>
    );
};

export default HorizontalNavBar;