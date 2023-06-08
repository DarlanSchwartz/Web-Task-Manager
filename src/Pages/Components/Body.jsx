import { styled } from "styled-components";
import { useContext } from "react";
import MainContext from "../../Contexts/MainContext";
export default function Body()
{
    const {darkMode , setDarkMode, sidebarOpen,setSidebarOpen} = useContext(MainContext);
    return(
        <BodyDiv side_open = {sidebarOpen.toString()}>
            <CollumnDiv>
                <h1>To do (4)</h1>
            </CollumnDiv>
            <CollumnDiv>
                <h1>Doing (3)</h1>
            </CollumnDiv>
            <CollumnDiv>
                <h1>Done (15)</h1>
            </CollumnDiv>
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


const CollumnDiv = styled.div`
    height: 100%;
    width: 300px;
    margin-left: 20px;
    background-color: #1f2b35;
    color: #b8b8b8;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    h1{
        margin-top: 10px;
        font-size: 18px;
    }
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