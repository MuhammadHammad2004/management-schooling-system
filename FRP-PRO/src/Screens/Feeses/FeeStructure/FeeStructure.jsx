import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import Data from "../../../Data";

export const FeeStructure = () => {
  const feestructureData = Data.feesData;
  return (
    <div>
      <Navbar />
      <div className="absolute top-30 px-10 py-5 line-gap flex flex-wrap gap-2 justify-center">
        {feestructureData.map((e, i) => (
          <div
            key={i}
            class="w-full max-w-md bg-white  border-gray-200 dark:border-blue-300 shadow-2xl hover:shadow-black rounded-lg p-5"
          >
            <h2 class="text-3xl  text-blue-700 font-bold mb-2">{e.class}</h2>
            <address class="relative bg-gray-50 dark:bg-gray-100 dark:border-blue-400 p-4 border-2 rounded-lg  border-gray-200 not-italic grid grid-cols-2">
              <div class="space-y-2  dark:text-green-400 leading-loose hidden sm:block">
                Mothly <br />
                Yearly <br />
                Group
              </div>
              <div
                id="contact-details"
                class="space-y-2 text-red-500 font-medium leading-loose"
              >
                {e.monthly} PKR <br />
                {e.yearly} PKR <br />
                {e.group}
              </div>

              <div
                id="tooltip-contact-details"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
              >
                <span id="default-tooltip-message-contact-details">
                  Copy to clipboard
                </span>
                <span
                  id="success-tooltip-message-contact-details"
                  class="hidden"
                >
                  Copied!
                </span>
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </address>
          </div>
        ))}
      </div>
    </div>
  );
};
