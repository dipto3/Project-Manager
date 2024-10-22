import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import Button from "./button/Button";
import DoneList from "./category/DoneList";
import OnProgressList from "./category/OnProgressList";
import ReviseList from "./category/ReviseList";
import ToDoList from "./category/ToDoList";
import AddSvg from "./svg/AddSvg";
export default function Content() {
  const [showModal, setShowModal] = useState(false);

  function handleCloseClick() {
    setShowModal(false);
  }
  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        {showModal && <AddTaskModal onCloseClick={handleCloseClick} />}
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
          <ToDoList />
          <OnProgressList />
          <DoneList />
          <ReviseList />
        </div>
      </div>
    </>
  );
}
