import React from 'react';
import HorizontalNavBar from '../components/navigation/HorizontalNavBar'
import AddCategorie from '../components/categorie/AddCategorie'
import ProviderCategorie from '../components/categorie/ContextCategorie'

const Admin = () => {
    return (
        <>
       <ProviderCategorie>
       <HorizontalNavBar/>
       <AddCategorie/>       
       </ProviderCategorie>
       </>
    );
};

export default Admin;