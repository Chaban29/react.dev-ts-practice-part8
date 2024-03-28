import { ITask, initialTasks } from './tasks';

export interface IStateReducer {
  tasks: ITask[];
}

export type TypeAction =
  | { type: 'add'; id: number; text: string }
  | { type: 'change'; task: ITask }
  | { type: 'delete'; id: number };

export const initialState: IStateReducer = { tasks: initialTasks };
export const tasksReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: action.id, text: action.text, done: false },
        ],
      };
    }
    case 'change': {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        }),
      };
    }
    case 'delete': {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
};
