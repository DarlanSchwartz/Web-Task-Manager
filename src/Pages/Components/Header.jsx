import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";
import { useContext } from "react";

export default function Header()
{
    const {darkMode , setDarkMode, sidebarOpen,setSidebarOpen} = useContext(MainContext);
    
    return(
        <HeaderDiv side_open = {sidebarOpen.toString()}>
            <h1 onClick={() => setSidebarOpen(true)}>Platform Launch</h1>
            <div className="nav-btns">
                <button className="add-btn">+Add New Task</button>
                <button className="dots">:</button>
            </div>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
height: 100px;
width: ${(props) => props.side_open == 'true' ? 'calc(100% - 300px)' : '100%'};
position: fixed;
top: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #2C2C38;
transition: all 200ms;
.nav-btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-right: 20px;

    .dots{
        border: 0;
        background-color: rgba(0,0,0,0);
        color: white;
        font-size: 30px;
    }

    .add-btn{
        border-radius: 20px;
        height: 40px;
        color: white;
        background-color: #645FC6;
        border: 0;
        font-size: 17px;
        width: 150px;
    }
}

h1
{
    color:  white;
    margin-left: 30px;
    cursor: pointer;
}


`;