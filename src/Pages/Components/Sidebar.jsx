import { useContext, useState } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";

export default function Sidebar()
{
    const {darkMode , setDarkMode, sidebarOpen,setSidebarOpen} = useContext(MainContext);
    
    return(
    <SidebarContainer open = {sidebarOpen.toString()}>
        <LogoDiv>
            <img src="https://cdn-icons-png.flaticon.com/512/6579/6579010.png" alt="" />
            <h1>Logo Name</h1>
        </LogoDiv>
        <BoardsDiv>
            <h1>All boards  (5)</h1>
            <BoardButton selected = 'true'>Platform Launch</BoardButton>
            <BoardButton selected = 'false'>Marketing Plan</BoardButton>
            <BoardButton selected = 'false'>Doing other stuff</BoardButton>
            <BoardButton selected = 'false'>Platform Launch</BoardButton>
            <CreateBoardButton selected = 'false'>+Create New Board</CreateBoardButton>
        </BoardsDiv>

        <button className="dark-mode-btn" onClick={()=> setDarkMode(!darkMode)}>{darkMode ? 'Disable dark mode' : 'Enable dark mode'}</button>
        <button className="hide-sidebar-btn" onClick={()=> setSidebarOpen(!sidebarOpen)}>Hide Sidebar</button> 
    </SidebarContainer>
    );
}

const CreateBoardButton = styled.button`
    width: 95%;
    text-align: center;
    border: 0;
    height: 40px;
    background-color: rgba(0,0,0,0);
    color: #645FC6;
    transition: all 200ms;
    &:hover{
            color: white;
    }
`;

const BoardButton = styled.button`

    width: 95%;
    text-align: center;
    border: 0;
    height: 40px;
    border-top-right-radius: ${(props) => props.selected  == 'false' ? '0' :  '20px '};
    border-bottom-right-radius: ${(props) => props.selected  == 'false' ? '0' :  '20px '};
    transition: all 200ms;
    background-color:${(props) => props.selected == 'false' ? 'rgba(0,0,0,0)' : '#645FC6'};
    color: ${(props) => props.selected == 'false' ? '#949494' : 'white'};
    &:hover{
        background-color: #645FC6;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        color: white;
    }

`;


const SidebarContainer = styled.div`

width: 300px;
height: 100%;
background-color: #2C2C38;
position: fixed;
left: ${(props) => props.open == 'true' ? 0 : '-300px'};
top: 0;
z-index: 1;
justify-content: center;
align-items: center;
border-right: 1px solid #3C3C48;
transition: all 300ms;

.dark-mode-btn{
    width: 300px;
    border: 0;
    height: 40px;
    position: fixed;
    left:  ${(props) => props.open == 'true' ? 0 : '-300px'};
    bottom: 100px;
    background-color: #21212D;
    color: white;
    &:hover{
        color: lightgray;
    }
    
}

.hide-sidebar-btn{
    width: 300px;
    border: 0;
    height: 40px;
    background-color: rgba(0,0,0,0);
    color: white;
    position: fixed;
    left: ${(props) => props.open == 'true' ? 0 : '-300px'};
    bottom: 40px;
    &:hover{
        color: lightgray;
    }
}
`;

const LogoDiv = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 100%;
margin-top: 30px;

img{
    width: 40px;
}

h1{
    font-size: 30px;
    color: white;
}

`;

const BoardsDiv = styled.div`

h1{
    font-size: 20px;
    margin-top: 20px;
    margin-left: 50px;
    color: #85859c;
}   

`;