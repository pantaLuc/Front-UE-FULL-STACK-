import React from 'react';
import { Route, Routes } from "react-router-dom";
import AllUsers from '../components/authentification/AllUsers';
import AddCategorie from '../components/categorie/AddCategorie'
import ProviderCategorie from '../components/categorie/ContextCategorie'
const Admin = () => {
    return (
       <>
       <ProviderCategorie>
       <Routes>
        <Route path="/addcategorie" element={<AddCategorie/>}></Route>
        <Route path="/alluser" element={<AllUsers/>}></Route>
       </Routes>
       </ProviderCategorie>
       </>
    );
};

export default Admin;