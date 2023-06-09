import { styled } from "styled-components";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
import Collumn from "./Collumn";
import UserContext from "../../Contexts/UserContext";
export default function Body() {
    const { darkMode, sidebarOpen,selectedBoard } = useContext(MainContext);
    return (
        <BodyDiv side_open={sidebarOpen.toString()}>
            {selectedBoard && selectedBoard.columns.length > 0 && selectedBoard.columns.map((col,index) => {
                 return <Collumn key={index} column_color={col.color.toString()} len={col.tasks.length} title={col.columnTitle} tasks= {col.tasks}/>
            })}
            <AddCollumnDiv>
                <h1>+New Collumn</h1>
            </AddCollumnDiv>
        </BodyDiv>
    );
}

const BodyDiv = styled.div`

    position: fixed;
    top: 100px;
    left: ${(props) => props.side_open == 'true' ? '300px' : 0};
    background-color: #21212d;
    height: 100%;
    width: 100%;
    display:  flex;
    transition: all 200ms;
`;

const AddCollumnDiv = styled.div`
    height: 100%;
    width: 300px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 20px;

    background-color: #23232f;
    color: #7e8699;
    cursor: pointer;

    transition: all 200ms;

    &:hover{
        color: white;
    }
`;