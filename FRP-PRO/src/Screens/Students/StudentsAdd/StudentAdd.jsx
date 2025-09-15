import React, { useState } from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import RadioButtonsGroup from "./../../../Components/RadioButto/RadioButton";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Bounce, toast } from "react-toastify";
import { db } from "../../../Config/Config";

export const StudentAdd = () => {
  const [studentname, setStudentname] = useState("");
  const [studentlastname, setStudentLastname] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentLastSchool, setStudentLastSchool] = useState("");

  const navigate = useNavigate();

  const studentHandler = async (e) => {
    e.preventDefault();

    try {
      const studentRegistration = {
        studentName: studentname,
        studentlastName: studentlastname,
        studentemail: studentEmail,
        studentphone: studentPhone,
        studenlastSchool: studentLastSchool,
      };
      const studentID = Math.floor(Math.random() * 100000000).toString();

      const saveData = await setDoc(
        doc(db, "StudentData", studentID),
        studentRegistration
      );

      const localID = localStorage.setItem("studentID", studentID);
      console.log(localID);

      setStudentname("");
      setStudentLastname("");
      setStudentEmail("");
      setStudentPhone("");
      setStudentLastSchool("");

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

      navigate("/student-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className=" w-full absolute top-60 flex flex-col items-center justify-center px-70 py-8  md:h-screen lg:py-0">
        <div className="w-full py-10 px-30 bg-white rounded-2xl shadow-xl/30 ">
          <form className="space-y-4 md:space-y-6" type="submit">
            <h1 className="text-6xl text-blue-700 font-mono font-bold text-center uppercase">
              Student Registration
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
                  setStudentname(e.target.value);
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                required=""
                onChange={(e) => {
                  setStudentLastname(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={(e) => {
                  setStudentEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="(+92) 000000000"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
                onChange={(e) => {
                  setStudentPhone(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Date Of Birth
              </label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="00/00/0000"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Last Qualification
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Matric / Inter"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
                onChange={(e) => {
                  setStudentLastSchool(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Class Group
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="A or B"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <RadioButtonsGroup />
            </div>
            <button
              onClick={studentHandler}
              type="submit"
              className="w-full text-black bg-primary-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-2xl border-2 border-blue-700 text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit Your Form
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
