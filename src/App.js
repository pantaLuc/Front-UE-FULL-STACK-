
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import Admin from "./pages/Admin";
import Signup from "./components/Signup"
import ListCategorie from "./components/ListCategorie";
import ListBoutique from "./components/ListBoutique";
import ListProduits from "./components/ListProduits";


function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/categorie" element={<ListCategorie/>}></Route>
      <Route path="/boutique" element={<ListBoutique/>}></Route>
      <Route path="/produit" element={<ListProduits/>}></Route>
     </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
