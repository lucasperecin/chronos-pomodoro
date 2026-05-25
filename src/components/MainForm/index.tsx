import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";

export function MainForm() {
    return <form className="form" action="">
        <div className="formRow">
        <Input id="meuInput" type="text" label="Task" placeholder="Digite sua tarefa" />
        </div>

        <div className="formRow">
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>

        <div className="formRow">
            <Cycles />
        </div>
            <Button icon={<PlayCircleIcon />} />
        </form>
}