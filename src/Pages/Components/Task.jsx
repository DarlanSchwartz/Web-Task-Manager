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

    width: 100%;
    height: auto;

    border-radius: 10px;
    cursor: pointer;
    background-color: #2C2C38;

    h1{
        margin-left: 10px;
        margin-top: 20px;

        color: white;
        font-size: 15px;
    }

    p{
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        color: #9e9e9e;
        font-size: 11px;
    }
`;