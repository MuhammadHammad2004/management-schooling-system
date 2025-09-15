import React, { useEffect, useState } from "react";
import { Navbar } from "./../../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { Bounce, toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const snap = await getDocs(collection(db, "StudentData"));
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setStudents(list);
        console.log(list);
      } catch (err) {
        toast.error("Failed to load Students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("StudentData", id);
    navigate("/update-student-name");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher permanently?")) return;
    try {
      await deleteDoc(doc(db, "StudentData", id));
      setStudents((prev) => prev.filter((e) => e.id !== id));
      toast.success("Student deleted!", { transition: Bounce });
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading…</span>
      </div>
    );

  return (
    <div>
      <Navbar />
      <div className="px-40 py-10">
        <div className="overflow-x-auto shadow-md sm:rounded-lg relative top-30">
          <h1 className="text-6xl font-mono font-bold text-center text-blue-700 uppercase py-2 bg-gray-200">
            Student List
          </h1>
          {students.length === 0 ? (
            <p className="text-center py-10 text-gray-500">
              No Students found.
            </p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-red-500 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Last Name</th>
                  <th className="px-6 py-3">Phone NUM</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Last School</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((e, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold uppercase text-black">
                      {e.studentName}
                    </td>
                    <td className="px-6 py-4 text-black">
                      {e.studentlastName}
                    </td>
                    <td className="px-6 py-4 text-black">{e.studentphone}</td>
                    <td className="px-6 py-4 text-black">{e.studentemail}</td>
                    <td className="px-6 py-4 text-black">
                      {e.studenlastSchool}
                    </td>
                    <td className="px-6 py-4 text-black">
                      <div className="flex space-x-4">
                        <EditIcon
                          onClick={() => handleEdit(e.id)}
                          className="text-green-600 cursor-pointer hover:scale-110"
                        />
                        <DeleteForeverIcon
                          onClick={() => handleDelete(e.id)}
                          className="text-red-600 cursor-pointer hover:scale-110"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
