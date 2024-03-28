import { FC, useState } from 'react';
import { ITask } from './tasks';

interface ITaskProps {
  task: ITask;
  onChange: (task: ITask) => void;
  onDelete: (taskId: number) => void;
}

type TypeEditing = boolean;

export const Task: FC<ITaskProps> = ({
  task,
  onChange,
  onDelete,
}: ITaskProps) => {
  const [isEditing, setIsEditing] = useState<TypeEditing>(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <label htmlFor='text'>
        <input
          name='text'
          id='text'
          type='text'
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button type='button' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </label>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button type='button' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label htmlFor='done'>
      <input
        id='done'
        name='done'
        type='checkbox'
        checked={task.done}
        onChange={(event) => {
          onChange({ ...task, done: event.target.checked });
        }}
      />
      {taskContent}
      <button type='button' onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
};
