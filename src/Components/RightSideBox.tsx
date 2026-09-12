import type { Dispatch, SetStateAction } from "react";
import type { DataType } from "../Type/Type";
import { IoCloseOutline } from "react-icons/io5";

interface ITechType {
  technologiesPromise?: Promise<DataType[]>;
  stack: DataType[];
  setStack: Dispatch<SetStateAction<DataType[]>>;
}

export const RightSideBox = ({ stack, setStack }: ITechType) => {
  const handleRemove = (nameToRemove: string) => {
    setStack(stack.filter((item) => item.name === nameToRemove));
  };
  const handleToRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="col-span-2">
      <div className="card card-border border-slate-100 p-6 bg-white">
        <h3 className="text-xl font-bold text-[#0A0F1D]">Your Stack</h3>
        <p className="text-sm text-slate-400 mt-1 mb-6">
          {stack.length === 0
            ? `No technologies selected yet.`
            : `${stack.length} Technology Selected.`}
        </p>

        {stack.length === 0 ? (
          <div className="border border-dashed border-slate-200 rounded-2xl py-8 flex items-center justify-center">
            <span className="text-sm font-medium text-slate-400">
              Your stack is empty.
            </span>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="space-y-3 max-h-90 overflow-y-auto pr-1">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3.5 border border-slate-200 rounded-2xl hover:border-slate-300 transition-all bg-white"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 leading-tight">
                        {item.name}
                      </h5>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(item.name)}
                    className="p-1 text-slate-400 hover:text-rose-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <IoCloseOutline className="text-xl" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleToRemoveAll()}
              className="w-full mt-4 py-2.5 border border-rose-200 text-rose-500 hover:bg-rose-50 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
