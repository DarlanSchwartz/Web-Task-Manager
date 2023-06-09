import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";
import { useContext } from "react";
import {BsThreeDotsVertical} from 'react-icons/bs';
import {BiChevronDown} from 'react-icons/bi';
import logo from '../../assets/logo.png';


export default function Header()
{
    const {darkMode , sidebarOpen,setSidebarOpen ,setInCreationMode,selectedBoard} = useContext(MainContext);
    
    return(
        <HeaderDiv side_open = {sidebarOpen.toString()}>
            <div className="header-title">
                {!sidebarOpen && <img src={logo} alt="logo" />}
                <h1>{selectedBoard.title}</h1>
                {!sidebarOpen && <BiChevronDown onClick={() => setSidebarOpen(true)} className="arrow"/>}
            </div>
            <div className="nav-btns">
                <button onClick={() => setInCreationMode(true)} className="add-btn">+Add New Task</button>
                <button className="dots"><BsThreeDotsVertical/></button>
            </div>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100px;
    width: ${(props) => props.side_open == 'true' ? 'calc(100% - 280px)' : '100%'};

    position: fixed;
    top: 0;
    right: 0;

    background-color: #2C2C38;
    transition: all 200ms;
    border-bottom: 1px solid #3C3C48;

    .nav-btns{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-right: 20px;

        .dots{
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: rgba(0,0,0,0);
            color: white;

            border: 0;
            
            font-size: 30px;
        }

        .add-btn{
            width: 150px;
            height: 40px;

            color: white;
            background-color: #645FC6;

            border: 0;
            border-radius: 20px;

            font-size: 17px; 

            transition: all 200ms;
            &:hover{
                color: #645FC6;
                background-color: white;
            }
        }
}

    .header-title{
        display:  flex; 
        align-items: center;
        
        .arrow{
            color: #645FC6;
            font-size: 30px;
            cursor: pointer;

            &:hover{
                color: white;
            }
        }
        
        img{
            width: 40px;
            margin-left: 15px;  
        }

        h1
        {
            margin-left: 15px;

            color:  white;
            font-size: 30px;
        }
    }
`;