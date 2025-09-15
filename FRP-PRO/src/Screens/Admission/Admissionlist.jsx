import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Config";

export const Admissionlist = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "SchoolRegistration"));
        const data = snapshot.docs.map((doc) => doc.data());
        setStudents(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-40">
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative top-30">
          <h1 className="text-6xl font-mono font-bold text-center text-blue-700 uppercase py-2 bg-gray-200">
            Admission List
          </h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-gray-100 dark:text-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((e, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b dark:border-gray-700 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 text-gray-900 dark:text-black">
                      {e.registerName}
                    </td>
                    <td className="px-6 py-4 text-gray-900 dark:text-black">
                      {e.registerEmail}
                    </td>
                    <td className="px-6 py-4 text-gray-900 dark:text-black">
                      {e.registerClass}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No student data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
