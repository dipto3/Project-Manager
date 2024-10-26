import { useState } from "react";
import { useImmerReducer } from "use-immer";
import AddTaskModal from "./AddTaskModal";
import Button from "./button/Button";
import DoneList from "./category/DoneList";
import OnProgressList from "./category/OnProgressList";
import ReviseList from "./category/ReviseList";
import ToDoList from "./category/ToDoList";
import taskReducer from "./reducers/taskReducer";
import AddSvg from "./svg/AddSvg";
export default function Content() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, dispatch] = useImmerReducer(taskReducer, []);
  const [taskEdit, setTaskEdit] = useState(null);

  function handleCloseClick() {
    setShowModal(false);
  }
  function handleAddTask(task) {
    // console.log(task);
    dispatch({
      type: "added",
      taskName: task.taskName,
      description: task.description,
      date: task.date,
      category: task.category,
    });
  }

  function handleEditTask(task) {
    setTaskEdit(task);
    setShowModal(true);
  }

  function handleEdit(task){
    dispatch({
      type: "edited",
      task: task,
    });
    setShowModal(false);
    setTaskEdit(null);
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  const toDoList = tasks.filter((task) => task.category === "To-Do");
  const doneList = tasks.filter((task) => task.category === "Done");
  const revisedList = tasks.filter((task) => task.category === "Revised");
  const onProgressList = tasks.filter(
    (task) => task.category === "On Progress"
  );
  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        {showModal && (
          <AddTaskModal
            onCloseClick={handleCloseClick}
            onAdd={handleAddTask}
            taskEdit={taskEdit}
            onEditTask={handleEdit}
          />
        )}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <Button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              type="submit"
              onSmash={() => setShowModal(true)}
            >
              <AddSvg />
              Add
            </Button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          <ToDoList
            tasks={toDoList}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
          <OnProgressList
            tasks={onProgressList}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
          <DoneList
            tasks={doneList}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
          <ReviseList
            tasks={revisedList}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        </div>
      </div>
    </>
  );
}
