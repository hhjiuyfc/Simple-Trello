import React from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    /* タスクカードを削除する。idが等しくなかったら残す*/
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
