import './styles/global.css';
import './styles/theme.css';
import { Home } from "./pages/Home";
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '0:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        longBreakTime: 15,
        shortBreakTime: 5,
    }
}

export function App() {
    const [ state, setState ] = useState(initialState);
    
    return <Home />
}

export default App
