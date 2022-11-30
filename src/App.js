
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import Admin from "./pages/Admin";
import Signup from "./components/Signup"



function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
     </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
