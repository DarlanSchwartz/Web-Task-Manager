import { useContext, useState } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";
import { CiGrid32 } from 'react-icons/ci';
import { FiEyeOff } from 'react-icons/fi';
import DarkModeButton from "./DarkModeToogle";
import logo from '../../assets/logo.png'


export default function Sidebar() {
    const { darkMode, sidebarOpen, setSidebarOpen } = useContext(MainContext);

    return (
        <SidebarContainer open={sidebarOpen}>
            <LogoDiv>
                <img src={logo} alt="logo" />
                <h1>TMinder</h1>
            </LogoDiv>
            <BoardsDiv>
                <h1>All boards  (5)</h1>
                <BoardButton selected={true}><CiGrid32 fontSize={18} /> Platform Launch</BoardButton>
                <BoardButton selected={false}><CiGrid32 fontSize={18} /> Marketing Plan</BoardButton>
                <BoardButton selected={false}><CiGrid32 fontSize={18} /> Doing other stuff</BoardButton>
                <BoardButton selected={false}><CiGrid32 fontSize={18} /> Platform Launch</BoardButton>
                <CreateBoardButton selected={false}><CiGrid32 color="#645FC6" fontSize={18} /> +Create New Board</CreateBoardButton>
            </BoardsDiv>
            <DarkModeButton />
            <button className="hide-sidebar-btn" onClick={() => setSidebarOpen(!sidebarOpen)}><FiEyeOff />Hide Sidebar</button>
        </SidebarContainer>
    );
}

const CreateBoardButton = styled.button`

    width: 95%;
    height: 40px;

    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding-left: 40px;
   
    border: 0;
   
    background-color: rgba(0,0,0,0);
    color: #645FC6;

    transition: all 200ms;

    &:hover{
        color: white;
    }
`;

const BoardButton = styled.button`

    width: 95%;
    height: 40px;
    
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 40px;

    text-align: center;

    border: 0;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;

    background-color:${(props) => !props.selected ? 'rgba(0,0,0,0)' : '#645FC6'};
    color: ${(props) => !props.selected ? '#949494' : 'white'};
    
    transition: all 200ms;

    &:hover{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        background-color: #645FC6;
        color: white;
    }

`;


const SidebarContainer = styled.div`

    width: 300px;
    height: 100%;

    position: fixed;
    left: ${(props) => props.open ? 0 : '-300px'};
    top: 0;

    z-index: 1;
    background-color: #2C2C38;
    border-right: 1px solid #3C3C48;

    transition: all 300ms;

    .hide-sidebar-btn{

        position: fixed;
        left: ${(props) => props.open ? 0 : '-300px'};
        bottom: 40px;
        padding-left: 40px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        
        transition: all 300ms;

        width: 300px;
        height: 40px;

        border: 0;
        background-color: rgba(0,0,0,0);
        color: white;

        &:hover{
            color: lightgray;
        }
    }
`;

const LogoDiv = styled.div`

    display: flex;
    align-items: center;

    width: 100%;
    margin-top: 30px;

    gap: 10px;

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
        margin-top: 20px;
        margin-left: 50px;
        margin-bottom: 20px;

        color: #85859c;

        font-size: 11px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }   
`;