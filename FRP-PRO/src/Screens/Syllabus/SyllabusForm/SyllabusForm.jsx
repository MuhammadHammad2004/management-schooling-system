import React, { useState } from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Bounce, toast } from "react-toastify";
import { db } from "../../../Config/Config";

export const SyllabusForm = () => {
  const [subject, setSubject] = useState("");
  const [subjectClass, setSubjectClass] = useState("");

  const navigate = useNavigate();

  const syllabousHandler = async (e) => {
    e.preventDefault();

    try {
      const subjectRegistration = {
        SubjectName: subject,
        className: subjectClass,
      };
      const syllabousID = Math.floor(Math.random() * 100000000).toString();

      const syllabousData = await setDoc(
        doc(db, "SyllabousData", syllabousID),
        subjectRegistration
      );

      const localID = localStorage.setItem("SyllabousID", syllabousID);
      console.log(localID);

      setSubject("");
      setSubjectClass("");

      toast.success("Registered Successfuly", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      navigate("/syllabous-list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <section className=" w-full absolute flex flex-col items-center justify-center px-70 py-8  md:h-screen lg:py-0">
        <div className="w-full py-10 px-30 bg-white rounded-2xl shadow-xl/30 ">
          <form className="space-y-4 md:space-y-6" type="submit">
            <h1 className="text-4xl font-mono font-bold text-red-500 text-center uppercase">
              Class Syllabous
            </h1>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Class
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Class"
                required=""
                onChange={(e) => {
                  setSubjectClass(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Subject Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Subject"
                required=""
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full text-black bg-primary-600 hover:bg-primary-700  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Uplode File
            </button>
            <button
              onClick={syllabousHandler}
              type="submit"
              className="w-full text-black bg-primary-600 hover:bg-primary-700  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Your Syllabous
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
