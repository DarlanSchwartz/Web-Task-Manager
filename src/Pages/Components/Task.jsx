import { useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";

export default function Task(props)
{
    const {darkMode, setViewingTask,setIsViewingTask,selectedBoard,setSelectedBoard} = useContext(MainContext);
    const {task,col_id} = props;
    const [wantSwap , setWantSwap] = useState(false);

    function handleDrag(e)
    {
        e.dataTransfer.setData('task',JSON.stringify({...task, father: col_id}));
    }

    function handleSwap(e)
    {
        e.preventDefault();
        setWantSwap(true);
    }

    function endDrag(e)
    {
        setWantSwap(false);
    }    
   
    return(
        <TaskDiv col_id={col_id} onDrop={(e) => {e.preventDefault(); setWantSwap(false);}} onDragEnd={endDrag} onDragLeave={endDrag} onDragOver={(e)=> handleSwap(e)} show_border = {wantSwap.toString()} id={task.id} draggable onDragStart={(e) => handleDrag(e) } onClick={() => {setIsViewingTask(true); setViewingTask(task);}}>
            <h1>{task.taskTitle}</h1>
            <p>{task.subtasks.filter((sub) => sub.done == true).length} of {task.subtasks.length} subtasks</p>
        </TaskDiv>
    );
}


const TaskDiv = styled.div`

    width: 100%;
    height: auto;
    margin-top: 20px;

    border-radius: 10px;
    cursor: pointer;
    background-color: #2C2C38;

    border-top: ${(props) => props.show_border == 'true' ? '4px solid white' : '0'};

    &:hover h1 {
        color:#645FC6;
    }

    h1{
        margin-left: 10px;
        margin-top: 20px;

        color: white;
        font-size: 15px;
        transition: all 200ms;
        pointer-events: none;
    }

    p{
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        color: #9e9e9e;
        font-size: 11px;
        pointer-events: none;
    }
`;