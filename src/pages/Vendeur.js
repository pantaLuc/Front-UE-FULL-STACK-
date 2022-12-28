import React from 'react';
import { Route, Routes } from "react-router-dom";
import HorizontalNavBar from '../components/navigation/HorizontalNavBar'
import AddProduit from '../components/produit/AddProduit'
import AddBoutique from '../components/boutique/AddBoutique'
import ProviderProduit from '../components/produit/ContextProduit'
import ProviderBoutique from '../components/boutique/ContextBoutique'
import ProviderCategorie from '../components/categorie/ContextCategorie'
import jwt_decode from "jwt-decode";

const Vendeur = () => {
    const data =JSON.parse(localStorage.getItem("data"));
    const user= data?jwt_decode(data):"";
    console.log("data",user.roles)
    return (
        <>
       <ProviderProduit>
       <HorizontalNavBar/>
       {data?(user.roles[0].authority)==="Vendeur-livreur" &&(
         <Routes>
         <Route path="/addproduit" element={<ProviderCategorie><ProviderBoutique><AddProduit/></ProviderBoutique></ProviderCategorie>}></Route>
         <Route path="/addboutique" element={<ProviderBoutique><AddBoutique/></ProviderBoutique>}></Route>
        </Routes>
        ):"Vous ne verrez rien"}
      
       </ProviderProduit>
       </>
    );
};

export default Vendeur;