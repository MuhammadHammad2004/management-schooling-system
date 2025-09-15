import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import Data from "../../../Data";

export const ExamResult = () => {
  const examData = Data.examData;

  return (
    <div>
      <Navbar />
      <div className="px-40">
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative top-30">
          <h1 className="text-7xl font-mono font-bold text-center text-blue-700 uppercase py-2 bg-gray-200">
            Exam Result
          </h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-red-500k uppercase bg-gray-100 dark:text-red-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Names
                </th>
                <th scope="col" className="px-6 py-3">
                  Father Names
                </th>
                <th scope="col" className="px-6 py-3">
                  Classes
                </th>
                <th scope="col" className="px-6 py-3">
                  Percentage
                </th>
                <th scope="col" className="px-6 py-3">
                  Groups
                </th>
              </tr>
            </thead>
            <tbody className="overflow-scroll">
              {examData.map((e, i) => (
                <tr
                  key={i}
                  className="bg-white border-b border-gray-400 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {e.name}
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {e.fatherName}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {e.class}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {e.percentage}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {e.group}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
