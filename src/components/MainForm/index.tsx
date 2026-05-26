import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useState } from "react";

export function MainForm() {
    const [taskName, setTaskName] = useState('');


    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('DEU CERTO');
    }

    return (
            <form  onSubmit={handleCreateNewTask} className="form" action="">
                <div className="formRow">
                <Input 
                    id="meuInput" 
                    type="text" 
                    label="Task" 
                    placeholder="Digite sua tarefa" 
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                </div>

                <div className="formRow">
                    <p>
                        Próximo intervalo é de 25min
                    </p>
                </div>

                <div className="formRow">
                    <Cycles />
                </div>
                <Button icon={<PlayCircleIcon />} />
            </form>
        )
}