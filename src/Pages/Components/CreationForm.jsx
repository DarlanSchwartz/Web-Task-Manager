import { useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import MainContext from "../../Contexts/MainContext";
import { RiDeleteBack2Fill} from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import {BsChevronDown} from 'react-icons/bs';

export default function CreationForm()
{
    const title = useRef();
    const description = useRef();
    const status = useRef();
    const {setInCreationMode , selectedBoard,setSelectedBoard} = useContext(MainContext);
    const [subtasks, setSubtasks] = useState([{placeholder:'e.g. Make coffe', id:0},{placeholder:'e.g. Drink coffe and smile',id:1}]);

    function deleteSubtask(id)
    {
        setSubtasks(subtasks.filter(subtask => subtask.id !== id));
    }

    function addSubtask()
    {
        const uniqueId = uuidv4();
        
        const newSubtask = {
            placeholder:'e.g. Make coffe',
            id: uniqueId
        };

        setSubtasks([...subtasks,newSubtask]);
    }

    function addTask(e)
    {
        let copy = {...selectedBoard};
        e.preventDefault();


        let subtasksArr = [];

       
        document.querySelectorAll('.subtask').forEach(subtask => {
            subtasksArr.push(
                {
                    id:uuidv4(),
                    subtaskTitle: subtask.value,
                    done: false,
                }
            );
        });


        copy.columns.forEach(col => {
            if(col.columnTitle == status.current.value)
            {
                const newObj = {
                    id:uuidv4(),
                    taskTitle: title.current.value,
                    taskDescription: description.current.value,
                    subtasks:subtasksArr
                }

                col.tasks = [...col.tasks,newObj];
            } 
        });
        

        setSelectedBoard(copy);

        setInCreationMode(false);
        
    }
    
    return(
        <Modal onClick={(e) => {setInCreationMode(false); e.stopPropagation()}}>
            <CreateForm onSubmit={(e) => {addTask(e)}} onClick={(e) => e.stopPropagation()}>
                <h1>Add New Task</h1>
                <label htmlFor="title">Title</label>
                <input required className="title" type="text" placeholder="e.g. Take coffe break" id="title" name="title" ref={title}/>
                <label htmlFor="description">Description</label>
                <textarea rows={7} name="description" id="description" ref={description} placeholder="e.g. It's always good to take a break. This 15 minute break will reacharge the batteries a little"/>
                <label htmlFor="subtasks0">Subtasks</label>
                {subtasks.map((subtask,index) =>{
                    return (
                    <div key={uuidv4()} className="subtask-container">
                        <input className="subtask" type="text" id={'subtasks' + index} name={"subtasks" + index} placeholder={subtask.placeholder} key={subtask.id}/>
                        <RiDeleteBack2Fill onClick={() => deleteSubtask(subtask.id)} className="delete-icon"/>
                    </div>
                    )
                })}
                <button onClick={addSubtask} className="add-subtask-btn" type="button">+Add New Subtask</button>
                <label>Status</label>
                <div className="select-container">
                    <select  ref={status}>
                        {selectedBoard.columns.map((col) => {
                            return <option key={uuidv4()}>{col.columnTitle}</option>
                        })}
                    </select>
                    <BsChevronDown className="dropdown-btn"/>
                </div>
                <button className="create-task-btn">Create Task</button>
            </CreateForm>
        </Modal>
    );
}


const CreateForm = styled.form`
    
    width:700px;

    position: fixed;
    z-index: 4;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;
    background-color: #2C2C38;
    border-radius: 10px;

    h1{
        font-size: 20px;
        margin-left: 35px;
        margin-top: 30px;
        align-self: self-start;
    }

    .subtask-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .delete-icon{
            cursor: pointer;
            font-size: 25px;
            margin-top: 10px;
        }

        .subtask{
            width: 85%;
            height: 45px;

            background-color: #2C2C38;
            color: white;
            border: 1px solid #3C3C48;
            border-radius: 5px;

            &:focus{
            outline: none;
            }

            padding-left: 10px;
            margin-top: 10px;
    }
}

    .title{
        width: 90%;
        height: 45px;

        background-color: #2C2C38;
        color: white;
        border: 1px solid #3C3C48;
        border-radius: 5px;

        &:focus{
           outline: none;
        }

        padding-left: 10px;
        margin-top: 10px;
    }

    

    label{
        margin-left: 35px;
        margin-top: 20px;
       
        align-self: self-start;
        font-weight: 500;
    }

    textarea{
        resize: none;
        margin-top: 10px;
        width: 90%;
        padding-left: 10px;

        border-radius: 5px;
        border: 1px solid #3C3C48;

        background-color: #2C2C38;
        color: white;
        
        &:focus{
           outline: none;
        }
    }

    .add-subtask-btn, .create-task-btn{
        width: 90%;
        height: 50px;

        margin-top: 20px;

        color: white;
        background-color: #645FC6;

        border: 0;
        border-radius: 25px;

        font-size: 17px;

        transition: all 200ms;
        &:hover{
            color: #645FC6;
            background-color: white;
        }
    }

    .create-task-btn
    {
        margin-bottom: 40px;
        margin-top: 30px;
    }

    select{
        width: 90%;
        height: 40px;
        margin-top: 10px;
        background-color: #2C2C38;
        color: white;
        border-radius: 5px;
        padding-left: 10px;
        cursor: pointer;
        appearance: none;
        font-size: 15px;
        font-weight: 500;
        border: 1px solid #3C3C48;
       
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
}
    
`;

const Modal = styled.div`

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
`;

export {Modal};