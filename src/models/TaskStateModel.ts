import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
    tasks: TaskModel[]; // historico, MainForm
    secondsRemaining: number; // CountDown, Historico, MainForm, Button
    formattedSecondsRemaining: string; // Titulo, CountDown
    activeTask: TaskModel | null; // CountDown, Historico, MainForm, Button
    currentCycle: number; // Home
    config: {
        workTime: number; // MainForm
        shortBreakTime: number;  // MainForm
        longBreakTime: number; // MainForm
    };
};