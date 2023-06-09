export default function Subtask({done , title})
{
    function changeSubtaskState()
    {

    }

    return (
        <div className="subtask">
            <input className="subtask-checkbox" type="checkbox" checked = {done} onChange={changeSubtaskState}></input>
            <p className={!done ? '' : 'subtask-done'}>{title}</p>
        </div>
    );
}