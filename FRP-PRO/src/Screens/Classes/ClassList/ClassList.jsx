import React, { useEffect, useState } from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ClassList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const snap = await getDocs(collection(db, "ClassData"));
        const list = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTeachers(list);
      } catch (err) {
        toast.error("Failed to load teachers");
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("teacherId", id);
    navigate("/update-teacher-name");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher permanently?")) return;
    try {
      await deleteDoc(doc(db, "TeacherData", id));
      setTeachers((prev) => prev.filter((e) => e.id !== id));
      toast.success("Teacher deleted!", { transition: Bounce });
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
    <>
      <Navbar />
      <div className="px-20  py-25">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <h1 className="text-4xl font-mono font-bold text-center text-blue-700 uppercase py-4 bg-gray-100">
            Classes List
          </h1>

          {teachers.length === 0 ? (
            <p className="text-center py-10 text-gray-500">No Classes found.</p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-red-500 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Last Name</th>
                  <th className="px-6 py-3">Last School</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((e, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold uppercase text-black">
                      {e.studentName}
                    </td>
                    <td className="px-6 py-4 text-black">
                      {e.studentlastName}
                    </td>

                    <td className="px-6 py-4 text-black">
                      {e.studenlastSchool}
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
