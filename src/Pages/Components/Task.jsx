import { useContext } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";

export default function Task(props)
{
    const {darkMode, setViewingTask,setIsViewingTask} = useContext(MainContext);
    
    const {task} = props;
    return(
        <TaskDiv onClick={() => {setIsViewingTask(true); setViewingTask(task);}}>
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

    &:hover h1 {
        color:#645FC6;
    }

    h1{
        margin-left: 10px;
        margin-top: 20px;

        color: white;
        font-size: 15px;
        transition: all 200ms;
    }

    p{
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        color: #9e9e9e;
        font-size: 11px;
    }
`;