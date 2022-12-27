import React from 'react';
import { Route, Routes } from "react-router-dom";
import HorizontalNavBar from '../components/navigation/HorizontalNavBar'
import AddProduit from '../components/produit/AddProduit'
import AddBoutique from '../components/boutique/AddBoutique'
import ProviderProduit from '../components/produit/ContextProduit'
import ProviderBoutique from '../components/boutique/ContextBoutique'

const Vendeur = () => {
    return (
        <>
       <ProviderProduit>
       <HorizontalNavBar/>
       <Routes>
        <Route path="/addproduit" element={<AddProduit/>}></Route>
        <Route path="/addboutique" element={<ProviderBoutique><AddBoutique/></ProviderBoutique>}></Route>
       </Routes>
       </ProviderProduit>
       </>
    );
};

export default Vendeur;