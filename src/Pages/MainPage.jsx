import { styled } from "styled-components";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Body from "./Components/Body";

export default function MainPage()
{
    return (
        <>
            <Header/>
            <Sidebar/>
            <Body/>
        </>
    );
}


