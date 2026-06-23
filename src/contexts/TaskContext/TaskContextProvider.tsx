import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { TaskReducer } from "./taskReducer";

type TaskContextProviderProps = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(TaskReducer, initialTaskState);

    type ActionType = {
        type: string,
        payload?: number,
    };

    const [myState, dispatch] = useReducer((state, action: ActionType) => {
        console.log(state, action)

        switch (action.type) {
            case 'INCREMENT':
                if (!action.payload) return state;
                return {
                    ...state,
                    secondsRemaining: state.secondsRemaining + action.payload,
                }
        }

        return state; // estado atual (não altera)
    }, {
        secondsRemaining: 0
    })

    // useEffect(() => {
    //     console.log(state)
    // }, [state]);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            <h1>O estado é: {JSON.stringify(myState)}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>Incrementar 10</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 20 })}>Incrementar 20</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: -50 })}>Incrementar -50</button>

        </TaskContext.Provider>
    )
}