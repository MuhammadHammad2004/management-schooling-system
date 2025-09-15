import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import schoolImg from "../../Components/Images/school.avif";
import subjectsImg from "../../Components/Images/subjets.jpg";
import classesImg from "../../Components/Images/classes.jpg";
import admissionImg from "../../Components/Images/admission.avif";
import examImg from "../../Components/Images/exam.jpg";
import testImg from "../../Components/Images/test.jpg";
import teachersImg from "../../Components/Images/teachers.jpeg";
import studentesImg from "../../Components/Images/students.jpeg";

const menuItems = [
  "School ",
  "Admission ",
  "Teachers ",
  "Student ",
  "Classes ",
  "Syllabus ",
  "Subject ",
  "Exam ",
];

const cardImages = [
  schoolImg,
  admissionImg,
  teachersImg,
  studentesImg,
  classesImg,
  testImg,
  subjectsImg,
  examImg,
];

const HomeCards = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/");
  };

  return (
    <div className="px-20 py-10">
      <Grid container spacing={3} className=" flex flex-wrap justify-center">
        {menuItems.map((e, i) => (
          <Grid key={i}>
            <Card
              className="cursor-pointer flex flex-wrap justify-center transition-transform hover:scale-105 h-70 w-70"
              elevation={3}
              onClick={() => handleClick(e)}
            >
              <CardContent>
                <img
                  src={cardImages[i]}
                  alt="cardImages"
                  style={{
                    height: "200px",
                  }}
                />
                <br />
                <h2
                  className="font-bold text-2xl text-red-500"
                  variant="body1"
                  align="center"
                >
                  {e}
                </h2>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeCards;
