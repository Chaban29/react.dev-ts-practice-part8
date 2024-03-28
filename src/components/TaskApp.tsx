import { FC, useReducer } from 'react';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { ITask } from './tasks';
import { initialState, tasksReducer } from './tasksReducer';

let nextId = 3;

export const TaskApp: FC = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  const handleAddTask = (text: string) => {
    dispatch({ type: 'add', id: nextId++, text });
  };

  const handleChangeTask = (task: ITask) => {
    dispatch({ type: 'change', task: task });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({ type: 'delete', id: taskId });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks.tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
