
import DeleteSvg from "../svg/DeleteSvg";
import EditSvg from "../svg/EditSvg";
import FilterSvg from "../svg/FilterSvg";
export default function ToDoList() {
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-indigo-600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">To-Do (45)</h3>
            <FilterSvg />
          </div>
          <div>
            <div className="mb-4 rounded-lg bg-gray-800 p-4">
              <div className="flex justify-between">
                <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                  Content Writer
                </h4>

                <div className="flex gap-2">
                  <button>
                    <DeleteSvg />
                  </button>
                  <button>
                    <EditSvg />
                  </button>
                </div>
              </div>
              <p className="mb-2 text-sm text-zinc-200">
                Prepare proctor for client meeting
              </p>

              <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}