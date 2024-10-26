import Button from "./button/Button";
import DeleteSvg from "./svg/DeleteSvg";
import EditSvg from "./svg/EditSvg";
export default function Task() {
  return (
    <>
      <div className="mb-4 rounded-lg bg-gray-800 p-4">
        <div className="flex justify-between">
          <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
            Content Writer
          </h4>

          <div className="flex gap-2">
            <Button className="" type="submit">
              <DeleteSvg />
            </Button>
            <Button className="" type="submit">
              <EditSvg />
            </Button>
          </div>
        </div>
        <p className="mb-2 text-sm text-zinc-200">
          Prepare proctor for client meeting
        </p>
        <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
      </div>
    </>
  );
}
