import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";
import BoardButton from "./BoardButton";
import { FiEyeOff } from 'react-icons/fi';
import DarkModeButton from "./DarkModeToogle";
import logo from '../../assets/logo.png';
import { CiGrid32 } from 'react-icons/ci';
import UserContext from "../../Contexts/UserContext";


export default function Sidebar() {
    const { darkMode, sidebarOpen, setSidebarOpen, setSelectedBoard } = useContext(MainContext);
    const {currentData} = useContext(UserContext);

    useEffect(() =>{
        // Maybe set here the current board?
        setSelectedBoard({id:0,title:currentData.boards[0].boardTitle, columns:currentData.boards[0].columns});
    },[])

    return (
        <SidebarContainer open={sidebarOpen}>
            <LogoDiv>
                <img src={logo} alt="logo" />
                <h1>TMinder</h1>
            </LogoDiv>
            <BoardsDiv>
                <h1>All boards  ({currentData.boards.length})</h1>
                {currentData && currentData.boards.length > 0 && currentData.boards.map((board,index) => {
                    return <BoardButton key={index} id={index} title={board.boardTitle} columns={board.columns}/>;
                })}
                <CreateBoardButton ><CiGrid32 fontSize={18} className="icon"/> +Create New Board</CreateBoardButton>
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

    .icon{
        color: #645FC6;
        transition: all 200ms;
    }

    &:hover{
        color: white;
    }

    &:hover .icon{
        color: white;
    }
`;


const SidebarContainer = styled.div`

    width: 280px;
    height: 100%;

    position: fixed;
    left: ${(props) => props.open ? 0 : '-300px'};
    top: 0;

    z-index: 1;
    background-color: #2C2C38;
    border-right: 1px solid #3C3C48;

    transition: all 300ms;

    .hide-sidebar-btn{

        width: 300px;
        height: 40px;

        position: fixed;
        left: ${(props) => props.open ? 0 : '-300px'};
        bottom: 40px;
        padding-left: 40px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        
        transition: all 300ms;

        font-size: 15px;
        font-weight: bold;
        border: 0;
        background-color: rgba(0,0,0,0);
        color: #828fa3;

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
        margin-top: 30px;
        margin-left: 45px;
        margin-bottom: 20px;

        color: #85859c;

        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }   
`;