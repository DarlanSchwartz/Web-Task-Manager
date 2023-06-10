import { styled } from "styled-components";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from "react";
import MainContext from "../../Contexts/MainContext";

export default function Collumn(props)
{
    const {title,column_color,len, id} = props;
    const [currentColor,setCurrentColor] = useState('rgba(0,0,0,0)');
    const [tasks , setTasks] = useState(props.tasks);
    const {deleteTask,selectedBoard,setSelectedBoard} = useContext(MainContext);

    useEffect(() =>{
        setTasks(props.tasks);
    },[props.tasks]);

    function handleDragOver(e)
    {
        e.preventDefault();

        const receivedData = JSON.parse(e.dataTransfer.getData('task'));

        //console.log(receivedData.father + ' ' + id);

        if(receivedData.father.toString() == id.toString())
        {
            return;
        }

        const copyBoard = {...selectedBoard};

        copyBoard.columns.forEach(col =>{
            if(col.id == id)
            {
                col.tasks = [...col.tasks, receivedData];
            }
        })

        setSelectedBoard(copyBoard);

        deleteTask(receivedData.father.toString(),receivedData.id.toString());
    }
    
    return(
        <CollumnDiv id={id} c_color={currentColor} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDragOver(e)} column_color={column_color}>
                <div className="column-top">
                    <div className="column-color"></div>
                    <h1>{title} ({len})</h1>
                </div>
                {tasks && tasks.length > 0 && tasks.map((task,index) =>{
                    return <Task col_id={id}  key={uuidv4()} task={task}/>;
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
    background-color: ${(props)=> props.c_color};

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