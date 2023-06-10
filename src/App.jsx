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
  const [viewingTaskColId,setViewingTaskColId] = useState(null);

  function deleteTask(colID,taskID)
  {
    const copyBoard = {...selectedBoard};

    copyBoard.columns.forEach(col =>{
      if(col.id.toString() == colID)
      {
        col.tasks = col.tasks.filter(task => task.id.toString() !== taskID.toString());
      }
    })

    setSelectedBoard(copyBoard);
  }


  return (
    <UserContext.Provider value={{currentData,setCurrentData}}>
      <MainContext.Provider value={{sidebarOpen,setSidebarOpen,darkMode,setDarkMode,inCreationMode,setInCreationMode,selectedBoard,setSelectedBoard,isViewingTask,setIsViewingTask,viewingTask,setViewingTask,deleteTask,viewingTaskColId,setViewingTaskColId}}>
        <GlobalStyle/>
        <MainPage/>
      </MainContext.Provider>
    </UserContext.Provider>
  )
}
