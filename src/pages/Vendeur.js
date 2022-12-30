import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduit from "../components/produit/AddProduit";
import AddBoutique from "../components/boutique/AddBoutique";
import ProviderProduit from "../components/produit/ContextProduit";
import ProviderBoutique from "../components/boutique/ContextBoutique";
import ProviderCategorie from "../components/categorie/ContextCategorie";


const Vendeur = () => {

  return (
    <>
      <ProviderProduit>
              <Routes>
                <Route
                  path="/addproduit"
                  element={
                    <ProviderCategorie>
                      <ProviderBoutique>
                        <AddProduit />
                      </ProviderBoutique>
                    </ProviderCategorie>
                  }
                ></Route>
                <Route
                  path="/addboutique"
                  element={
                    <ProviderBoutique>
                      <AddBoutique />
                    </ProviderBoutique>
                  }
                ></Route>
              </Routes>
            )
         
      </ProviderProduit>
    </>
  );
};

export default Vendeur;
