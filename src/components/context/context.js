import React, { useState, useContext, useEffect } from 'react';
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [ isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
      setIsSidebarOpen(false)
  }

  const updateSize = () => {
    setWidth(
      window.innerWidth
    );
    if (window.innerWidth > 1100){
      setIsSidebarOpen(false)
    }
  }

    useEffect(() => {
      window.onresize = updateSize

    }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        width,
        setWidth
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };