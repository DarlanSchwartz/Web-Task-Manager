import { useContext, useState } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";
import {CiGrid32} from 'react-icons/ci';
import {BsFillSunFill ,BsMoonStarsFill} from 'react-icons/bs';
import {FiEyeOff} from 'react-icons/fi';


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
            <BoardButton selected = 'true'><CiGrid32 fontSize={18}/> Platform Launch</BoardButton>
            <BoardButton selected = 'false'><CiGrid32 fontSize={18}/> Marketing Plan</BoardButton>
            <BoardButton selected = 'false'><CiGrid32 fontSize={18}/> Doing other stuff</BoardButton>
            <BoardButton selected = 'false'><CiGrid32 fontSize={18}/> Platform Launch</BoardButton>
            <CreateBoardButton selected = 'false'><CiGrid32 color="#645FC6" fontSize={18}/> +Create New Board</CreateBoardButton>
        </BoardsDiv>

        <button className="dark-mode-btn" onClick={()=> setDarkMode(!darkMode)}><BsFillSunFill/> {darkMode ? 'Disable dark mode' : 'Enable dark mode'}<BsMoonStarsFill/></button>
        <button className="hide-sidebar-btn" onClick={()=> setSidebarOpen(!sidebarOpen)}><FiEyeOff/>Hide Sidebar</button> 
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
    display: flex;
    gap: 10px;
    padding-left: 40px;
    align-items: center;
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
    align-items: center;
    display: flex;
    gap: 10px;
    padding-left: 40px;
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
    width: 220px;
    border: 0;
    height: 40px;
    position: fixed;
    left:  ${(props) => props.open == 'true' ? '40px' : '-300px'};
    border-radius: 8px;
    bottom: 100px;
    background-color: #21212D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    transition: all 300ms;
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
    transition: all 300ms;
    &:hover{
        color: lightgray;
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    gap: 10px;
    
}
`;

const LogoDiv = styled.div`

display: flex;
align-items: center;

width: 100%;
margin-top: 30px;

img{
    width: 40px;
    margin-left: 35px;
}

h1{
    font-size: 30px;
    color: white;
}

`;

const BoardsDiv = styled.div`

h1{
    font-size: 11px;
    margin-top: 20px;
    margin-left: 50px;
    color: #85859c;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
}   

`;