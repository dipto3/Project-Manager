import AddSvg from "./svg/AddSvg";
import DeleteSvg from "./svg/DeleteSvg";
import EditSvg from "./svg/EditSvg";
import FilterSvg from "./svg/FilterSvg";

export default function Content() {
  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
              <AddSvg />
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
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

                  <p className="mt-6 text-xs text-zinc-400">
                    February 20, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-yellow-500 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">On Progress (45)</h3>
                <FilterSvg />
              </div>

              <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4 className="mb-2 flex-1 font-semibold text-yellow-500">
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

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-teal-500 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Done (1)</h3>
                <FilterSvg />
              </div>

              <div>
                <div className="mb-4 rounded-lg bg-gray-800 p-4">
                  <div className="flex justify-between">
                    <h4 className="mb-2 font-semibold text-teal-500">
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
                    Make Promotional Ads for Instagram {`fasto's`}
                  </p>

                  <p className="mt-6 text-xs text-zinc-400">
                    February 20, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className="rounded-lg bg-rose-500 p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Revise (1)</h3>
                <FilterSvg />
              </div>
              <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4 className="mb-2 font-semibold text-rose-500">
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
                  Make Promotional Ads for Instagram {`fasto's`}
                </p>

                <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
