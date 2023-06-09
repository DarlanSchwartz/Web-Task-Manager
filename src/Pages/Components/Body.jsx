import { styled } from "styled-components";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
import Collumn from "./Collumn";
export default function Body() {
    const { darkMode, sidebarOpen } = useContext(MainContext);
    return (
        <BodyDiv side_open={sidebarOpen.toString()}>
            <Collumn column_color='red' len={10} title='Todo'/>
            <Collumn column_color='yellow' len={5} title='Doing'/>
            <Collumn column_color='green' len={15} title='Done'/>
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
    background-color: #21212D;
    height: 100%;
    width: 100%;
    display:  flex;
    transition: all 200ms;
`;

const AddCollumnDiv = styled.div`
    height: 100%;
    width: 300px;
    margin-left: 20px;
    background-color: #394650;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
`;