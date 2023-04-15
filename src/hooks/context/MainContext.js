import React, { createContext, useState } from 'react'

const MainContext = createContext();

const MainProvider = ({ children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <MainContext.Provider
    value={{sidebarOpen, setSidebarOpen}}
    >
        {children}
    </MainContext.Provider>
  )
}

export {MainContext, MainProvider}