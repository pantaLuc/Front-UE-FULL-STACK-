
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/NavBar";
import Signin from "./components/authentification/Signin";

import Signup from "./components/authentification/Signup"
import ListCategorie from "./components/categorie/ListCategorie";
import ListBoutique from "./components/boutique/ListBoutique";
import ListProduits from "./components/produit/ListProduits";
import Vendeur from "./pages/Vendeur";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProviderCategorie from './components/categorie/ContextCategorie'
import ProviderProduit from './components/produit/ContextProduit'
import ProviderBoutique from './components/boutique/ContextBoutique'
import { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Context } from "./Context";


function App() {
  const navigate = useNavigate();
  const { getCookie, isValidToken, tokeValid } = useContext(Context);
  const [firstRender, setFirstRender] = useState(false);
  const data = getCookie();
  const user = data?jwt_decode(data) : "";

  useEffect(() => {
    if (!firstRender) {
      console.log("le token", getCookie());
      isValidToken(getCookie());   
      setFirstRender(true)
    }
  }, [getCookie, isValidToken ,firstRender]);
  console.log("c' est valide", tokeValid);

  return (
    
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/categorie" element={<ProviderCategorie><ListCategorie/></ProviderCategorie>}></Route>
      <Route path="/boutique" element={<ProviderBoutique><ListBoutique/></ProviderBoutique>}></Route>
      <Route path="/produit" element={<ProviderProduit><ListProduits/></ProviderProduit>}></Route>
     
     {
      tokeValid?(user.roles[0].authority === "Vendeur-livreur"? ( <Route path="/vendeur/*" element={<Vendeur/>}></Route>):
      user.roles[0].authority === "Admin"?( <Route path="/admin/*" element={<Admin/>}></Route>):null
      ):null
     }
     
     </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
