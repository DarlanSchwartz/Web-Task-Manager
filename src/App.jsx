import { useState } from 'react'
import MainPage from './Pages/MainPage'
import GlobalStyle from './globalStyle'
import MainContext from './Contexts/MainContext';
import UserContext from './Contexts/UserContext';
import DATA from './mock_data';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode , setDarkMode ] = useState(false);
  const [inCreationMode , setInCreationMode ] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState({id:null,title:'',columns:[]});
  const [currentData, setCurrentData] = useState({...DATA});
  const [isViewingTask,setIsViewingTask] = useState(false);
  const [viewingTask,setViewingTask] = useState(null);


  return (
    <UserContext.Provider value={{currentData,setCurrentData}}>
      <MainContext.Provider value={{sidebarOpen,setSidebarOpen,darkMode,setDarkMode,inCreationMode,setInCreationMode,selectedBoard,setSelectedBoard,isViewingTask,setIsViewingTask,viewingTask,setViewingTask}}>
        <GlobalStyle/>
        <MainPage/>
      </MainContext.Provider>
    </UserContext.Provider>
  )
}
