import { PauseCircleIcon, PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    
    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    console.log(nextCycle)

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current == null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            }
        })
    }

    function handleInterruptTask() {
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
            }
        })
    }

    return (
            <form  onSubmit={handleCreateNewTask} className="form" action="">
                <div className="formRow">
                <Input 
                    id="meuInput" 
                    type="text" 
                    label="Task" 
                    placeholder="Digite sua tarefa" 
                    // value={taskName}
                    // onChange={(e) => setTaskName(e.target.value)}
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
                </div>

                <div className="formRow">
                    <p>
                        Próximo intervalo é de 25min
                    </p>
                </div>

                {state.currentCycle > 0 && (
                    <div className="formRow">
                        <Cycles />
                    </div>
                )}
                
                <div className="formRow">
                    {!state.activeTask && (
                        <Button 
                            aria-label='Iniciar nova tarefa' 
                            title='iniciar nova tarefa' 
                            type='submit' 
                            icon={<PlayCircleIcon />} 
                            key='button_submit'
                        />
                    )}
                    {!!state.activeTask && (
                        <Button 
                            aria-label='Interromper tarefa atual' 
                            title='Interromper tarefa atual' 
                            type='button' icon={<StopCircleIcon />} 
                            color="red" 
                            onClick={handleInterruptTask}
                            key='button_button'
                        />
                    )}
                </div>
            </form>
        )
}