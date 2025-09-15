import React, { useEffect, useState } from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SyllabusList = () => {
  const [syllabous, setSyllabous] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSyllabous = async () => {
      try {
        const snap = await getDocs(collection(db, "SyllabousData"));
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSyllabous(list);
      } catch (err) {
        toast.error("Failed to load Syllabous");
      } finally {
        setLoading(false);
      }
    };
    fetchSyllabous();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading…</span>
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="px-40  py-25">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <h1 className="text-4xl font-mono font-bold text-center text-blue-700 uppercase py-4 bg-gray-100">
            Classes List
          </h1>

          {syllabous.length === 0 ? (
            <p className="text-center py-10 text-gray-500">
              No Syllabous found.
            </p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-red-500 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">School</th>
                </tr>
              </thead>
              <tbody>
                {syllabous.map((e, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-black font-bold">
                      {e.className}
                    </td>
                    <td className="px-6 py-4  uppercase text-black">
                      {e.SubjectName}
                    </td>
                    <td className="px-6 py-4  uppercase text-black">
                      Learning Management System
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
