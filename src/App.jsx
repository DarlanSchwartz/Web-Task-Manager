import { useState } from 'react'
import MainPage from './Pages/MainPage'
import GlobalStyle from './globalStyle'
import MainContext from './Contexts/MainContext';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode , setDarkMode ] = useState(false);
  const [inCreationMode , setInCreationMode ] = useState(false);


  return (
    <MainContext.Provider value={{sidebarOpen,setSidebarOpen,darkMode,setDarkMode,inCreationMode,setInCreationMode}}>
      <GlobalStyle/>
      <MainPage/>
    </MainContext.Provider>
  )
}
