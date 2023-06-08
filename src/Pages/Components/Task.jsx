import { styled } from "styled-components";

export default function Task(props)
{
    const {title,subtasks_len,subtasks_done} = props;
    return(
        <TaskDiv>
            <h1>{title}</h1>
            <p>{subtasks_done} of {subtasks_len} subtasks</p>
        </TaskDiv>
    );
}


const TaskDiv = styled.div`

border-radius: 10px;
width: 100%;
height: auto;
cursor: pointer;

background-color: #2C2C38;

    h1{
        color: white;
        margin-left: 10px;
        font-size: 15px;
        margin-top: 20px;
    }

    p{
        color: #9e9e9e;
        margin-left: 10px;
        font-size: 11px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;