// Technologies.tsx

import { type Dispatch, type SetStateAction } from "react";
import type { DataType } from "../Type/Type";

import { LeftSideBox } from "./LeftSideBox";
import { RightSideBox } from "./RightSideBox";

interface techType {
  technologiesPromise: Promise<DataType[]>;
  stack: DataType[];
  setStack: Dispatch<SetStateAction<DataType[]>>;
}

export const Technologies = ({
  technologiesPromise,
  stack,
  setStack,
}: techType) => {
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
        <LeftSideBox
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />

        <RightSideBox />
      </div>
    </div>
  );
};
