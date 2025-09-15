import React, { useState } from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Box } from "@mui/material";
import RadioButtonsGroup from "./../../../Components/RadioButto/RadioButton";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const TeacherAdd = () => {
  const [teacher, setTeacher] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherQulaification, setTeacherQualification] = useState("");
  const [teacherSubjects, setTeacherSubjects] = useState("");

  const navigate = useNavigate();

  const teacherHandler = async (e) => {
    e.preventDefault();

    try {
      const teacherRegistration = {
        teacherName: teacher,
        teacherPhoneNumber: teacherPhone,
        techerQualification: teacherQulaification,
        teachingSubject: teacherSubjects,
      };
      const teacherID = Math.floor(Math.random() * 100000000).toString();

      const gteData = await setDoc(
        doc(db, "TeacherData", teacherID),
        teacherRegistration
      );

      const localID = localStorage.setItem("teacherID", teacherID);

      setTeacher("");
      setTeacherPhone("");
      setTeacherQualification("");
      setTeacherSubjects("");

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

      navigate("/teachers-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Navbar />
      <section className=" w-full absolute top-10 flex flex-col items-center justify-center px-70 py-8  md:h-screen lg:py-0">
        <div className="w-full py-10 px-30 bg-white rounded-2xl shadow-xl/30 ">
          <form className="space-y-4 md:space-y-6" type="submit">
            <h1 className="text-6xl text-blue-700 font-mono font-bold text-center uppercase">
              Teachers Rigestration
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
                value={teacher}
                onChange={(e) => {
                  setTeacher(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Subjects
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Mathamatics / Urdu"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={teacherSubjects}
                onChange={(e) => {
                  setTeacherSubjects(e.target.value);
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
                value={teacherPhone}
                onChange={(e) => {
                  setTeacherPhone(e.target.value);
                }}
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
                placeholder="BSC / BSS"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
                value={teacherQulaification}
                onChange={(e) => {
                  setTeacherQualification(e.target.value);
                }}
              />
            </div>
            <div>
              <RadioButtonsGroup />
            </div>
            <button
              type="submit"
              onClick={teacherHandler}
              className="w-full text-black bg-primary-600 hover:bg-primary-700  hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Rigester Your Form
            </button>
          </form>
        </div>
      </section>
    </Box>
  );
};
