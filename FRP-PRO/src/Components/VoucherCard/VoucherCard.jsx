import React from "react";
import Data from "../../Data";

const FeeVoucherCard = () => {
  const data = Data.schedual;
  return (
    <div className="flex justify-center flex-wrap items-center w-full bg-gradient-to-br gap-10 to-white px-4">
      {data.map((e, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg p-6 border border-blue-300 animate-fade-in-up transition-transform duration-500 hover:scale-105"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-700">🎓 Fee Voucher</h2>
            <span className="text-sm text-gray-500">#FV-2025-009</span>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-medium">Student Name:</p>
            <p className="text-lg font-semibold text-black">
              {e.name}
              <br />
              {e.fatherName}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-700 font-medium">Class:</p>
              <p className="text-black"> {e.class}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Group:</p>
              <p className="text-black">A</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Due Date:</p>
              <p className="text-red-500 font-semibold">{e.date}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Fee Month:</p>
              <p className="text-black">{e.feeMonth}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 font-medium">Amount Due:</p>
            <p className="text-2xl font-bold text-green-600">Rs. {e.amount}</p>
          </div>

          <div className="flex justify-between items-center">
            <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
              Pending
            </span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Download Voucher
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeeVoucherCard;
