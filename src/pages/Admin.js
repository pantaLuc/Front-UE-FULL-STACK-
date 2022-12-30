import React from 'react';
import AddCategorie from '../components/categorie/AddCategorie'
import ProviderCategorie from '../components/categorie/ContextCategorie'
const Admin = () => {
    return (
       <>
       <ProviderCategorie>
       <Routes>
        <Route path="/addcategorie" element={<AddCategorie/>}></Route>
       </Routes>
       </ProviderCategorie>
       </>
    );
};

export default Admin;