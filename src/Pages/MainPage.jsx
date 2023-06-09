import { styled } from "styled-components";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import CreationForm from "./Components/CreationForm";
import { useContext } from "react";
import MainContext from "../Contexts/MainContext";

export default function MainPage()
{
    const {inCreationMode} = useContext(MainContext);
    return (
        <>
            <Header/>
            <Sidebar/>
            <Body/>
            {inCreationMode && <CreationForm/>}
        </>
    );
}


