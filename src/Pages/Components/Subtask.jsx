import { useContext, useEffect, useState } from "react";
import MainContext from "../../Contexts/MainContext";

export default function Subtask({ done, title, id, viewing_task_col_id, viewing_task_id }) {
    const [checked, setChecked] = useState(false);
    const { selectedBoard, setSelectedBoard } = useContext(MainContext);

    useEffect(() => {
        setChecked(done);
    }, []);

    function check(value) {
        selectedBoard.columns.forEach(col => {
            if (col.id == viewing_task_col_id) {
                col.tasks.forEach(t => {
                    if (t.id == viewing_task_id) {
                        t.subtasks.forEach(subt => {
                            if (subt.id == id) {
                                console.log(subt.id, id)
                                subt.done = value;
                            }
                        })
                    }
                })
            }
        });

        setSelectedBoard({ ...selectedBoard });
    }

    return (
        <div id={id} className="subtask">
            <input className="subtask-checkbox" type="checkbox" checked={checked} onChange={() => check(!done)}></input>
            <p className={!checked ? '' : 'subtask-done'}>{title}</p>
        </div>
    );
}