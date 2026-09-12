/*
import { use, type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { DataType } from "../Type/Type";
import { toast } from "react-toastify";

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
              <div className="card card-border bg-base-100 w-auto shadow-lg">
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
                        toast.success(`${technology.name} Added Successfully!`);
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
*/

import { use, type Dispatch, type SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import type { DataType } from "../Type/Type";
import { toast } from "react-toastify";

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

  return (
    <div className="col-span-1 lg:col-span-4">
      {/* মোবাইলে ১টি করে কার্ড, ট্যাবলেটে ২টি এবং ডেস্কটপে ৩টি করে কার্ড দেখাবে */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((technology, ind) => {
          const isSelected = stack.some(
            (item) => item.name === technology.name,
          );
          return (
            <div key={ind}>
              <div className="card card-border bg-base-100 w-full shadow-lg">
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
                  <div className="flex items-center justify-between gap-1 mb-2 mt-0 text-sm">
                    <p>{technology.category}</p>
                    <p>{technology.difficulty}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[#FBBF24]" />
                      <p>{technology.rating}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (!isSelected) {
                        setStack([...stack, technology]);
                        toast.success(`${technology.name} Added Successfully!`);
                      }
                    }}
                    className={`${isSelected ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#0A0F1D] cursor-pointer"} w-full py-2.5 text-white rounded-2xl`}
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
