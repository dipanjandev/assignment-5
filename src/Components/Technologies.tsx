import { use } from "react";
import type { DataType } from "../Type/Type";

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
        <div className="col-span-4 border">
          <div>
            {technologies.map((technology) => {
              return (
                <div>
                  <h1>{technology.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 border">Right Side Box</div>
      </div>
    </div>
  );
};
