import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    // idが一致したら削除、それ以外は残す
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    // ドラッグできるエリア
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          {/* 押した時だけ呼ばれる関数(無名関数) */}
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
