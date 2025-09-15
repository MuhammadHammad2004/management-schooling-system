import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import RadioButtonsGroup from "./../../Components/RadioButto/RadioButton";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Config/Config";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SchoolRegistration = () => {
  const [registerationName, setRegistrationName] = useState("");
  const [registerationLastName, setRegistrationLastName] = useState("");
  const [registerationEmail, setRegistrationEmail] = useState("");
  const [registerationClass, setRegistrationClass] = useState("");

  const naviget = useNavigate();

  const registrationHandler = async (e) => {
    e.preventDefault();
    try {
      const registrationUser = {
        registerName: registerationName,
        registerEmail: registerationEmail,
        registerClass: registerationClass,
      };

      const userID = Math.floor(Math.random() * 10000000000).toString();

      const saveRegistrationData = await setDoc(
        doc(db, "SchoolRegistration", userID),
        registrationUser
      );

      console.log("Data Added Successfully", saveRegistrationData);
      setRegistrationClass("");
      setRegistrationEmail("");
      setRegistrationLastName("");
      setRegistrationName("");

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

      naviget("/admission-list");
    } catch (error) {
      console.log(error);

      toast.error(`${error}!`, {
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
    }
  };

  return (
    <div>
      <Navbar />
      <section className=" w-full absolute top-15 flex flex-col items-center justify-center px-70 py-8  md:h-screen lg:py-0">
        <div className="w-full py-10 px-30 bg-white rounded-2xl shadow-xl/30 ">
          <form className="space-y-4 md:space-y-6" type="submit">
            <h1 className="text-5xl text-blue-700 font-mono font-bold text-center uppercase">
              School Rigestration Form
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
                value={registerationName}
                onChange={(e) => {
                  setRegistrationName(e.target.value);
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
                value={registerationLastName}
                onChange={(e) => {
                  setRegistrationLastName(e.target.value);
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
                value={registerationEmail}
                onChange={(e) => {
                  setRegistrationEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Class Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Matric / Inter"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500"
                required=""
                value={registerationClass}
                onChange={(e) => {
                  setRegistrationClass(e.target.value);
                }}
              />
            </div>
            <div>
              <RadioButtonsGroup />
            </div>
            <button
              onClick={registrationHandler}
              className="w-full text-black bg-primary-600 hover:bg-primary-700  hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit Your Form
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
