
import { Route, Routes } from "react-router-dom";
import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/NavBar";
import Signin from "./components/authentification/Signin";

import Signup from "./components/authentification/Signup"
import ListCategorie from "./components/categorie/ListCategorie";
import ListBoutique from "./components/boutique/ListBoutique";
import ListProduits from "./components/produit/ListProduits";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/categorie" element={<ListCategorie/>}></Route>
      <Route path="/boutique" element={<ListBoutique/>}></Route>
      <Route path="/produit" element={<ListProduits/>}></Route>
      <Route path="/admin/*" element={<Admin/>}></Route>
     </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
