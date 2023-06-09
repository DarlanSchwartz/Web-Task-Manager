import { styled } from "styled-components";
import Task from "./Task";

export default function Collumn(props)
{
    const {title,column_color,len} = props;
    
    return(
        <CollumnDiv column_color={column_color}>
                <div className="column-top">
                    <div className="column-color"></div>
                    <h1>{title} ({len})</h1>
                </div>
                <Task title='Test asdhuhsd saduhdsa sadjhsd ads dsah' subtasks_len={4} subtasks_done={0}/>
        </CollumnDiv>
    );
}

const CollumnDiv = styled.div`

    height: 100%;
    width: 300px;

    margin-left: 20px;
    
    display: flex;
    justify-content: flex-start;
    flex-shrink: 0;
    flex-direction: column;

    color: #b8b8b8;

    .column-top{

        width: 100%;
        height: 40px;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        margin-top: 10px;
        margin-bottom: 10px;

    h1{
    
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .column-color{
        width: 15px;
        height: 15px;

        background-color: ${(props) => props.column_color};
        border-radius: 50%;
    }
}
`;