import React, { useState, useContext, useEffect } from 'react';
const url = 'https://my-clothes-api-project.herokuapp.com/clothes';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [clothes, setClothes] = useState([]);

  const fetchClothes = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setClothes(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClothes();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        clothes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
