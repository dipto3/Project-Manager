import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useImmerReducer } from "use-immer";
import { SearchContext } from "../context/SearchContext";
import taskReducer from "../reducers/taskReducer";
import AddTaskModal from "./AddTaskModal";
import Button from "./button/Button";
import DoneList from "./category/DoneList";
import OnProgressList from "./category/OnProgressList";
import ReviseList from "./category/ReviseList";
import ToDoList from "./category/ToDoList";
import AddSvg from "./svg/AddSvg";
export default function Content() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, dispatch] = useImmerReducer(taskReducer, []);
  const [taskEdit, setTaskEdit] = useState(null);
  const [isAscending, setIsAscending] = useState(true);
  const { search } = useContext(SearchContext);

  function handleCloseClick() {
    setShowModal(false);
    setTaskEdit(null);
  }
  function handleAddTask(task) {
    const { taskName, description, date, category } = task;
    if (!taskName || !description || !date || category === "Choose") {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    toast.success("Task Created successfully!");
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

  function handleEdit(task) {
    dispatch({
      type: "edited",
      task: task,
    });
    toast.info("Task Updated successfully!");
    setShowModal(false);
    setTaskEdit(null);
  }

  function handleDeleteTask(taskId) {
    toast.error("Task Deleted successfully!");
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  const sortedTasks = tasks
    .filter((task) =>
      (task.taskName || "").toLowerCase().includes((search || "").toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return isAscending ? dateA - dateB : dateB - dateA;
    });

  const toDoList = sortedTasks.filter((task) => task.category === "To-Do");
  const doneList = sortedTasks.filter((task) => task.category === "Done");
  const revisedList = sortedTasks.filter((task) => task.category === "Revised");
  const onProgressList = sortedTasks.filter(
    (task) => task.category === "On Progress"
  );

  function handleSort() {
    setIsAscending(!isAscending);
  }
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
            onSort={handleSort}
          />
          <OnProgressList
            tasks={onProgressList}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onSort={handleSort}
          />
          <DoneList
            tasks={doneList}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onSort={handleSort}
          />
          <ReviseList
            tasks={revisedList}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onSort={handleSort}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
