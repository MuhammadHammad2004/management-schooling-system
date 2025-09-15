import React from "react";

export const Accountselect = () => {
  return (
    <form class="max-w-sm mx-auto">
      <select
        id="small"
        class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Payment Methode</option>
        <option value="US">Mezaan</option>
        <option value="CA">UBL</option>
        <option value="CA">HBL</option>
        <option value="FR">Paypal</option>
        <option value="DE">Jaaz Cash</option>
      </select>
    </form>
  );
};
