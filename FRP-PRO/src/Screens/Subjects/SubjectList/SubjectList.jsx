import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

import { Navbar } from "../../../Components/Navbar/Navbar";

export const SubjectList = () => {
  const subjects = [
    { time: "07:00 AM to 07:40 AM", name: "Mathematics", icon: "🧮" },
    { time: "07:40 AM to 08:10 AM", name: "Science", icon: "🔬" },
    { time: "08:10 AM to 08:50 AM", name: "English", icon: "📚" },
    { time: "08:50 AM to 09:30 AM", name: "Urdu", icon: "✍️" },
    { time: "10:10 AM to 10:50 AM", name: "Computer", icon: "💻" },
    { time: "10:50 AM to 11:30 AM", name: "Physics", icon: "⚛️" },
    { time: "11:30 AM to 12:10 AM", name: "Chemistry", icon: "🧪" },
    { time: "12:10 AM to 12:50 AM", name: "History", icon: "🏛️" },
    { time: "12:50 AM to 01:30 AM", name: "Biology", icon: "🧬" },
  ];

  return (
    <div>
      <Navbar />
      <Box className="min-h-screen bg-slate-50 py-40 px-60">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
            align="center"
          >
            School Subjects
          </Typography>
          <div>
            <Grid mt={5} container spacing={3}>
              {subjects.map((e, i) => (
                <Card className="flex flex-col items-center justify-around p-4 rounded-xl cursor-pointer hover:shadow-lg">
                  <div className="flex flex-col items-center w-50">
                    <Avatar
                      className={`w-20 h-20 text-3xl ring-4 ring-offset-2`}
                    >
                      {e.icon}
                    </Avatar>
                    <CardContent>
                      <h1 className="font-bold text-red-500" align="center">
                        {e.name}
                      </h1>
                    </CardContent>
                  </div>
                  <CardContent>
                    <h1 className="font-bold text-green-500" align="center">
                      Time : {e.time}
                    </h1>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
    </div>
  );
};
