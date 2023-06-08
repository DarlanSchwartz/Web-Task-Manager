import {BsFillSunFill ,BsMoonStarsFill} from 'react-icons/bs';
import { styled } from 'styled-components';
import { useContext } from 'react';
import MainContext from '../../Contexts/MainContext';


export default function DarkModeButton()
{
    const {darkMode , setDarkMode, sidebarOpen} = useContext(MainContext);
    return(
        <DarkButton open={sidebarOpen} on={darkMode}>
            <div className='toggle-elements'>
                <BsFillSunFill height={420} width={40}/> 
                    <div className='darkmode-slider' onClick={()=> setDarkMode(!darkMode)}>
                        <div className="darkmode-slider-btn"></div>
                    </div>
                <BsMoonStarsFill/>
            </div>
        </DarkButton>
    );
}

const DarkButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 260px;
    height: 50px;

    position: fixed;
    left:  ${(props) => props.open ? '20px' : '-300px'};
    bottom: 100px;

    border: 0;
    border-radius: 5px;
    background-color: #202029;
    color: #ffffff94;
    cursor: auto;

    .toggle-elements{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .darkmode-slider{
        width: 40px;
        height: 18px;
        border-radius: 20px;
        background-color: ${(props) => props.on ? '#645FC6' : 'gray'};
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }

    .darkmode-slider-btn{
        width: 14px;
        height: 14px;
        
        position: absolute;
        left: ${(props) => props.on ? '24px' : '1px'};
        top: 2px;

        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        
        transition: all 200ms;
    }
`;