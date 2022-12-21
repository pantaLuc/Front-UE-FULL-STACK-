import React from 'react';
import { Route, Routes } from "react-router-dom";
import HorizontalNavBar from '../components/navigation/HorizontalNavBar'
import AddCategorie from '../components/categorie/AddCategorie'
import ProviderCategorie from '../components/categorie/ContextCategorie'
const Admin = () => {
    return (
       <>
       <ProviderCategorie>
       <HorizontalNavBar/>
       <Routes>
        <Route path="/addcategorie" element={<AddCategorie/>}></Route>
       </Routes>
       </ProviderCategorie>
       </>
    );
};

export default Admin;