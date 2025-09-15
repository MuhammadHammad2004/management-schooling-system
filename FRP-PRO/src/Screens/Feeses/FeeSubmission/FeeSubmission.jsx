import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Accountselect } from "../../../Components/AccountSlelection/Accountselect";

export const FeeSubmission = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
          <a className="flex text-red-500 items-center mb-6 text-4xl font-bold  ">
            Fee Submission
          </a>
          <div className="w-full bg-white rounded-lg shadow-xl/30  md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" type="submit">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-white text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Class
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Your Class"
                    className="bg-gray-50 border border-gray-300 text-white text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Group
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="A / B"
                    className="bg-gray-50 border border-gray-300 text-white text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <Accountselect />
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 border-1 border-green-500 hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit Your Fees
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
