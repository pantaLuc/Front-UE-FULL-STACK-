import React from 'react';
import { Route, Routes } from "react-router-dom";
import HorizontalNavBar from '../components/navigation/HorizontalNavBar'
import AddProduit from '../components/produit/AddProduit'
import ProviderProduit from '../components/produit/ContextProduit'

const Vendeur = () => {
    return (
        <>
       <ProviderProduit>
       <HorizontalNavBar/>
       <Routes>
        <Route path="/addproduit" element={<AddProduit/>}></Route>
       </Routes>
       </ProviderProduit>
       </>
    );
};

export default Vendeur;