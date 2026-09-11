import { use } from "react";
import type { DataType } from "../Type/Type";
import { FaStar } from "react-icons/fa";

interface techType {
  technologiesPromise: Promise<DataType[]>;
}

export const Technologies = ({ technologiesPromise }: techType) => {
  //   console.log(technologiesPromise);
  const technologies = use(technologiesPromise);
  //   console.log("Technologies Update", technologies);

  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <h3 className="font-extrabold text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h3>
        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {/* Left Side Box Model */}

        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-3">
            {technologies.map((technology) => {
              return (
                <div>
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
                      <button className="bg-[#0A0F1D] w-full py-2.5 text-white rounded-2xl cursor-pointer">
                        Add to Stack
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Right Side Box Model */}

        <div className="col-span-2">Right Side Box</div>
      </div>
    </div>
  );
};
