import { useContext, useState } from 'react';
import { CiGrid32 } from 'react-icons/ci';
import styled from 'styled-components';
import MainContext from '../../Contexts/MainContext';

export default function BoardButton(props)
{
    const {title, id ,columns} = props;
    const {selectedBoard, setSelectedBoard} = useContext(MainContext);
    return(
        <SCBoardButton  onClick={() => setSelectedBoard({id:id,title:title,columns:columns})} selected = {selectedBoard.id == id} >
            <CiGrid32 fontSize={18} /> {title}
        </SCBoardButton>
    );
}

const SCBoardButton = styled.button`

    width: 95%;
    height: 50px;
    
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 40px;

    text-align: center;
    font-weight: bold;
    font-size: 15px;

    border: 0;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;

    background-color:${(props) => !props.selected ? 'rgba(0,0,0,0)' : '#645FC6'};
    color: ${(props) => !props.selected ? '#949494' : 'white'};
    
    transition: all 200ms;

    &:hover{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        background-color: white;
        color: #645FC6;
    }

`;