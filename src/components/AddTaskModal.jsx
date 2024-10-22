import Button from "./button/Button";

export default function AddTaskModal({ onCloseClick }) {
  return (
    <>
      <div className=" bg-black bg-opacity-90 h-full w-full z-10 absolute top-0 left-0">
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold text-green-400">
                Create Task
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="taskName"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Task Name
                  </label>
                  <input
                    type="text"
                    name="taskName"
                    required
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dueDate"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="todo">To-Do</option>
                    <option value="inprogress">On Progress</option>
                    <option value="done">Done</option>
                    <option value="revised">Revised</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button
                    type="submit"
                    onSmash={onCloseClick}
                    className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Cancel
                  </Button>
                  <button
                    type="submit"
                    className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
