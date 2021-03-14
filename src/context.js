import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGloablContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
