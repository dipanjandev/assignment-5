/*
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

      <div className="grid grid-cols-6 gap-2 mb-20">
        <LeftSideBox
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />

        <RightSideBox
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />
      </div>
    </div>
  );
};
*/

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
    <div className="container mx-auto px-4 md:px-0">
      {/* হেডার অংশ: মোবাইলে টেক্সট সেন্টার এবং সাইজ অপ্টিমাইজড */}
      <div className="mb-10 text-center md:text-left">
        <h3 className="font-extrabold text-3xl sm:text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h3>
        <p className="text-[#64748B] text-sm sm:text-base mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* গ্রিড লেআউট: মোবাইলে ১ কলাম, ডেস্কটপে ৬ কলাম */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-2 mb-20">
        <LeftSideBox
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />

        <RightSideBox
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />
      </div>
    </div>
  );
};
