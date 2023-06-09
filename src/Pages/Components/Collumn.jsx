import { styled } from "styled-components";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';

export default function Collumn(props)
{
    const {title,column_color,len,tasks} = props;
    
    return(
        <CollumnDiv column_color={column_color}>
                <div className="column-top">
                    <div className="column-color"></div>
                    <h1>{title} ({len})</h1>
                </div>
                {tasks && tasks.length > 0 && tasks.map((task,index) =>{
                    return <Task key={uuidv4()} task={task}/>;
                })}
                
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