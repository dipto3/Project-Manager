import Button from "../button/Button";
import FilterSvg from "../svg/FilterSvg";
import Task from "../Task";
export default function DoneList() {
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-teal-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Done (1)</h3>
            <Button className="" type="submit">
              <FilterSvg />
            </Button>
          </div>

          <div>
            <Task />
          </div>
        </div>
      </div>
    </>
  );
}
