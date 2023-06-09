import { styled } from "styled-components";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import CreationForm from "./Components/CreationForm";
import { useContext } from "react";
import MainContext from "../Contexts/MainContext";
import ViewTask from "./Components/ViewTask";

export default function MainPage()
{
    const {inCreationMode,isViewingTask,viewingTask} = useContext(MainContext);
    return (
        <>
            <Header/>
            <Sidebar/>
            <Body/>
            {inCreationMode && <CreationForm/>}
            {!inCreationMode && isViewingTask && viewingTask && <ViewTask/> }

        </>
    );
}


