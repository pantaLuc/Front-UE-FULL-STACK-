import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../images/fullStack.png'
const Footer = () => {
    return (
        <footer className="pt-12 pb-8 bg-white sm:pt-16 lg:pt-20">
    <div className="px-4 mx-auto lg:px-8 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 sm:gap-x-8 sm:gap-y-16 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:gap-x-12 xl:gap-x-16">
            <div className="lg:col-span-2 sm:col-span-3 xl:col-span-3">
                <div className="lg:max-w-sm">
                       <Link className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                       <img className="w-auto h-8" src={logo} alt="" />

                       </Link>
                       
                    <p className="mt-8 text-sm font-normal leading-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                </div>
            </div>

            <div>
                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">Company</p>
                <ul className="mt-8 space-y-5">
                   
                </ul>
            </div>

            <div>
                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">Help</p>
                <ul className="mt-8 space-y-5">
                    <li>
                    
                        
                    </li>
                    
                </ul>
            </div>

            <div>
                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">Resources</p>
                <ul className="mt-8 space-y-5">
                    
                </ul>
            </div>
        </div>

        <hr className="mt-12 border-gray-200 sm:mt-16 lg:mt-20" />

        <div className="flex flex-col mt-8 sm:items-center sm:flex-row sm:justify-between">
            <p className="text-sm font-normal text-gray-600">© Copyright 2022. Tout droits resevés</p>

        </div>
    </div>
</footer>
    );
};

export default Footer;