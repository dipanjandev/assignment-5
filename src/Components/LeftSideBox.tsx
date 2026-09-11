// LeftSideBox.tsx

import { use, type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { DataType } from "../Type/Type";

interface ItechType {
  technologiesPromise: Promise<DataType[]>;
  stack: DataType[];
  setStack: Dispatch<SetStateAction<DataType[]>>;
}

export const LeftSideBox = ({
  technologiesPromise,
  stack,
  setStack,
}: ItechType) => {
  const technologies = use(technologiesPromise);
  //   console.log("Technologies Update", technologies);

  return (
    <div className="col-span-4">
      <div className="grid grid-cols-3 gap-3">
        {technologies.map((technology, ind) => {
          const isSelected = stack.some(
            (item) => item.name === technology.name,
          );
          return (
            <div key={ind}>
              <div className="card card-border bg-base-100 w-auto">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <img className="w-7" src={technology.icon} alt="" />
                    <h6
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${technology.badgeColor}`}
                    >
                      {technology.badge}
                    </h6>
                  </div>
                  <h2 className="card-title">{technology.name}</h2>
                  <p>{technology.description}</p>
                  <div className="divider" />
                  <div className="flex items-center justify-between gap-1 mb-2 mt-0">
                    <p>{technology.category}</p>
                    <p>{technology.difficulty}</p>
                    <FaStar className="text-[#FBBF24]" />
                    <p>{technology.rating}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (!isSelected) {
                        setStack([...stack, technology]);
                      }
                    }}
                    className={`${isSelected ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#0A0F1D] cursor-pointer"} w-full py-2.5 text-white rounded-2xl `}
                  >
                    {isSelected ? "Selected" : "Add to Stack"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
