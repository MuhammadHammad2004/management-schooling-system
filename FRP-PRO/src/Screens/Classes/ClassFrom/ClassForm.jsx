import React, { useState } from "react";
import { Navbar } from "./../../../Components/Navbar/Navbar";
import RadioButtonsGroup from "../../../Components/RadioButto/RadioButton";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { Bounce, toast } from "react-toastify";

export const ClassForm = () => {
  const [student, setStudent] = useState("");
  const [studentLastname, setStudentLastname] = useState("");
  const [studentLastSchool, setStudentLastQualification] = useState("");

  const navigate = useNavigate();

  const studentHandler = async (e) => {
    e.preventDefault();

    try {
      const studentRegistration = {
        studentName: student,
        studentlastName: studentLastname,
        studenlastSchool: studentLastSchool,
      };
      const studentID = Math.floor(Math.random() * 100000000).toString();

      const saveData = await setDoc(
        doc(db, "ClassData", studentID),
        studentRegistration
      );

      const localID = localStorage.setItem("studentID", studentID);
      console.log(localID);

      setStudent("");
      setStudentLastname("");
      setStudentLastQualification("");

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

      navigate("/classes-list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <section className=" w-full absolute top-10 flex flex-col items-center justify-center px-70 py-8  md:h-screen lg:py-0">
        <div className="w-full py-10 px-30 bg-white rounded-2xl shadow-xl/30 ">
          <form className="space-y-4 md:space-y-6" type="submit">
            <h1 className="text-6xl text-blue-700 font-mono font-bold text-center uppercase">
              Class Rigestration
            </h1>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Your Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required=""
                onChange={(e) => {
                  setStudent(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Last Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Last Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={(e) => {
                  setStudentLastname(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Last School
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="ABC School"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
                onChange={(e) => {
                  setStudentLastQualification(e.target.value);
                }}
              />
            </div>
            <div>
              <RadioButtonsGroup />
            </div>
            <button
              onClick={studentHandler}
              type="submit"
              className="w-full text-black bg-primary-600 hover:bg-primary-700  hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Rigester Your Form
            </button>
          </form>
        </div>
      </section>
      ;
    </div>
  );
};
