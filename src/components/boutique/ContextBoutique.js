import React, { useEffect, useMemo, useReducer, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const boutique = {
  nom: "",
  dateCreationBoutique: "",
  image: "",
  horaireList: {},
  utilisateur: {},
  joursemaine: "",
  intervalleHeure: [],
  estEnCongé: false,
  listintervalle: [],
  ouverture: "",
  fermeture: "",
  listBoutique: [],
  listBoutiquebyuser: [],
  username: "",
  boutiUpdate: {
    nom: "",
    dateCreationBoutique: "",
    image: "",
    horaireList: {},
    utilisateur: {},
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "addboutique": {
      return { ...state };
    }
    case "addintervalle": {
      return { ...state };
    }
    case "addhoraire": {
      return { ...state };
    }
    case "allintervalle": {
      return {
        ...state,
        listintervalle: action.data,
      };
    }
    case "allboutique": {
      return {
        ...state,
        listBoutique: action.data,
      };
    }
    case "allboutiquebyuser": {
      return {
        ...state,
        listBoutiquebyuser: action.data,
      };
    }
    case "deleteBoutique": {
      return {
        ...state,
      };
    }
    case "updateBoutique": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
//creation du context
export const ContextBoutique = React.createContext();

//cretation du provider
const ProviderBoutique = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, boutique);
  const [data, setData] = useState([]);
  const [datalisteboutique, setDatalistboutique] = useState([]);
  const [datalisteboutiquebyuser, setDatalistboutiquebyuser] = useState([]);
  const [idhoraire, setIdhoraire] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(6);
  const addboutique = async () => {
    await axios
      .post(
        `http://localhost:8080/boutique`,
        {
          nom: state.nom,
          image: state.image,
          dateCreationBoutique: state.dateCreationBoutique,
          horaireList: state.horaireList,
          utilisateur: state.utilisateur,
        },
        {
          headers: {
            Authorization: `${"Bearer " + Cookies.get("token")}`,
          },
        }
      )
      .then(
        (response) => {
          window.location.reload();
          console.log(response.data);
        },
        (error) => {
          console.log("l'erreur ", error.message);
        }
      );
    dispatch({
      type: "addboutique",
    });
  };
  const addintervalle = async () => {
    await axios
      .post(`http://localhost:8080/intervalleheure`, {
        ouverture: state.ouverture,
        fermeture: state.fermeture,
      })
      .then(
        (response) => {
          //window.location.reload();
          console.log(response.data);
        },
        (error) => {
          console.log("l'erreur ", error.message);
        }
      );
    dispatch({
      type: "addintervalle",
    });
  };
  const addhoraire = async () => {
    await axios
      .post(`http://localhost:8080/horaire/create`, {
        joursemaine: state.joursemaine,
        intervalleHeure: state.intervalleHeure,
        estEnCongé: state.estEnCongé,
      })
      .then(
        (response) => {
          setIdhoraire(response.data.id);
          console.log(response.data);
        },
        (error) => {
          console.log("l'erreur ", error.message);
        }
      );
    dispatch({
      type: "addhoraire",
    });
  };
  const allintervalle = async () => {
    await axios
      .get(`http://localhost:8080/intervalleheure/list`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("l'erreur ", error.message);
      });

    dispatch({
      type: "allintervalle",
      data,
    });
  };
  const allboutique = async () => {
    await axios
      .get(`http://localhost:8080/boutique/list`)
      .then((response) => {
        setDatalistboutique(response.data);
        setPageCount(Math.ceil(response.data.length / perPage));
      })
      .catch((error) => {
        console.log("l'erreur ", error.message);
      });

    dispatch({
      type: "allboutique",
      data,
    });
  };
  const allboutiquebyuser = async (e) => {
    await axios
      .get(`http://localhost:8080/boutique/searbyUserName?username=${e}`)
      .then((response) => {
        setDatalistboutiquebyuser(response.data);
      })
      .catch((error) => {
        console.log("l'erreur ", error.message);
      });

    dispatch({
      type: "allboutiquebyuser",
      data,
    });
  };

  const deleteBoutique = async (e) => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/boutique?id=${e}`)
      .then(
        (response) => {
          window.location.reload();
          console.log(response.data);
        },
        (error) => {
          console.log("l'erreur ", error.message);
        }
      );
    dispatch({
      type: "deleteBoutique",
    });
  };

  const updateBoutique = async () => {
    await axios
      .put(`${process.env.REACT_APP_API_URL}/boutique`, state.boutiUpdate)
      .then(
        (response) => {
          window.location.reload();
        },
        (error) => {
          console.log("l'erreur ", error.message);
        }
      );
  };
  const value = useMemo(() => {
    return {
      state,
      data,
      datalisteboutique,
      datalisteboutiquebyuser,
      idhoraire,
      allintervalle,
      addhoraire,
      addboutique,
      addintervalle,
      allboutique,
      allboutiquebyuser,
      deleteBoutique,
      updateBoutique,
      perPage,
      pageCount,
    };
  }, [
    state.listintervalle,
    addhoraire,
    allintervalle,
    addboutique,
    addintervalle,
    datalisteboutique,
    datalisteboutiquebyuser,
  ]);

  return (
    <ContextBoutique.Provider value={value}>
      {children}
    </ContextBoutique.Provider>
  );
};

export default ProviderBoutique;
