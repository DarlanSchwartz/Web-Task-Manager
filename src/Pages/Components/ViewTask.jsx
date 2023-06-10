import { Modal } from "./CreationForm";
import { useContext,useEffect,useRef, useState } from "react";
import MainContext from "../../Contexts/MainContext";
import { styled } from "styled-components";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import {BsChevronDown} from 'react-icons/bs';
import Subtask from "./Subtask";

export default function ViewTask(props) {
    const { viewingTask, setViewingTask, setIsViewingTask,selectedBoard,viewingTaskColId} = useContext(MainContext);
    const status = useRef();

    function stopViewingTask() {
        setViewingTask(null);
        setIsViewingTask(false);
    }
    function showDangerOptions()
    {
        
    }

    return (
        <Modal onClick={stopViewingTask}>
            <ViewTaskDiv onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    <h1>{viewingTask.taskTitle}</h1>
                    <BsThreeDotsVertical onClick={()=> showDangerOptions()} className="dots" />
                </div>
                {viewingTask.taskDescription != '' && <p className="description">{viewingTask.taskDescription}</p>}
                {viewingTask.subtasks.length > 0 && <h2 className="subtasks-header">Subtasks ({viewingTask.subtasks.filter((sub) => sub.done == true).length} of {viewingTask.subtasks.length})</h2>}
                {viewingTask.subtasks.map((subtask) => {
                    return <Subtask viewing_task_col_id={viewingTaskColId} viewing_task_id ={viewingTask.id} id={subtask.id} key={uuidv4()} title={subtask.subtaskTitle} done={subtask.done}/>
                })}
                <h3>Status</h3>
                <div className="select-container">
                    <select ref={status}>
                        {selectedBoard.columns.map((col) => {
                            return <option key={uuidv4()}>{col.columnTitle}</option>
                        })}
                    </select>
                    <BsChevronDown className="dropdown-btn"/>
                </div>
            </ViewTaskDiv>
        </Modal>
    );
}



const ViewTaskDiv = styled.div`
    width: 480px;
    //min-height: 272px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    z-index: 4;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    border-radius: 5px;
    background-color: #2C2C38;

    .header{

        width: 90%;
        margin-top: 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h1{
            color: white;
            font-size: 18px;
            font-weight: 700;
            line-height: 23px;
        }

        .dots{
            color: #ffffff6f;
            font-size: 23px;
            cursor: pointer;
        }
}

    .description{
        font-size: 13px;
        margin-bottom: 24px;
        margin-top: 24px;
        font-weight: 500;
        line-height: 23px;
        color: #828fa3;
        align-self: self-start;
        margin-left: 23px;
    }

    .subtasks-header{
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #828fa3;
        align-self: self-start;
        margin-left: 23px;
    }

    .subtask{
        background: #20212c;
        color: white;
        border-radius: 4px;
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 13px 12px;
        width: 91%;
        margin-top: 10px;

        input[type="checkbox"] {
            accent-color: #635fc7;
            cursor: pointer;
            width: 20px;
            height: 20px;
            border-radius: 10px;
        }

        P{
            font-size: 12px;
            font-weight: 700;
            line-height: 15px;
            transition: all 200ms;
        }

        .subtask-done{
            text-decoration: line-through;
            color: #828fa3;
        }
    }

    h3{
        color: white;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        align-self: self-start;
        margin-left: 23px;
        margin-top: 23px;
    }

    select{
        width: 90%;
        height: 40px;
        margin-top: 10px;
        background-color: #2C2C38;
        border: 1px solid #3C3C48;
        color: white;
        border-radius: 5px;
        padding-left: 10px;
        cursor: pointer;
        appearance: none;
        font-size: 15px;
        font-weight: 500;
       
        &:focus{
           outline: none;
        }
}
.select-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .dropdown-btn{
        position: absolute;
        right: 45px;
        top: 20px;
        color: #645FC6;
        cursor: pointer;
        pointer-events: none;
    }

    margin-bottom: 30px;
}
`;