import { useEffect, useState } from "react";

export default function Subtask({done , title , id})
{
    const [checked,setChecked] = useState(false);

    useEffect( ()=>{
        setChecked(done);
    },[]);

    return (
        <div id={id} className="subtask">
            <input className="subtask-checkbox" type="checkbox" checked = {checked} onChange={(e) => setChecked(!checked)}></input>
            <p className={!checked ? '' : 'subtask-done'}>{title}</p>
        </div>
    );
}