import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { myAxios } from "../api/axios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
    const { user } = useContext(AppContext);
    const [esemenyek, setEsemenyek] = useState([]);
    //const [datumok, setDatumok] = useState([]);

    const getAdat = async (vegpont, asyFgv) => {
      try {
        const response = await myAxios.get(vegpont);
        asyFgv([...response.data]);
      } catch (err) {
        console.log(err);
        console.log(vegpont);
      }
    };
  
    useEffect(() => {
      if(user?.id){
        getAdat(`/api/topevents/${user?.id}`, setEsemenyek);
    }

    }, [user?.id]);
  
  
    return (
      <ApiContext.Provider value={{ esemenyek }}>
        {children}
      </ApiContext.Provider>
    );
  
  };
  
  export default function useApiContext() {
    return useContext(ApiContext);
  }