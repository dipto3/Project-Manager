import Button from "../button/Button";
import Empty from "../Empty";
import FilterSvg from "../svg/FilterSvg";
import Task from "../Task";
export default function ToDoList({ tasks, onEdit, onDelete, onSort }) {
  const taskList =
    tasks.length > 0 ? (
      tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))
    ) : (
      <Empty />
    );
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-indigo-600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">To-Do ({tasks.length})</h3>
            <Button className="" type="submit" onSmash={onSort}>
              <FilterSvg />
            </Button>
          </div>
          <div>{taskList}</div>
        </div>
      </div>
    </>
  );
}
