import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signin } from "./Screens/Signin/Signin";
import { Login } from "./Screens/Login/Login";
import { HomeDashboard } from "./Screens/HomeDashboard/HomeDashboard";
import { PagenotFound } from "./Screens/PagenotFound";
import { ClassForm } from "./Screens/Classes/ClassFrom/ClassForm";
import { ClassList } from "./Screens/Classes/ClassList/ClassList";
import { ExamResult } from "./Screens/Exam/ExamResult/ExamResult";
import { ExamSehedule } from "./Screens/Exam/ExamShedule/ExamSehedule";
import { FeeStructure } from "./Screens/Feeses/FeeStructure/FeeStructure";
import { FeeSubmission } from "./Screens/Feeses/FeeSubmission/FeeSubmission";
import { FeeVoucher } from "./Screens/Feeses/FeeVoucher/FeeVoucher";
import { SchoolRegistration } from "./Screens/SchoolRegistration/SchoolRegistration";
import { StudentAdd } from "./Screens/Students/StudentsAdd/StudentAdd";
import { StudentEdit } from "./Screens/Students/StudentsEdit/StudentEdit";
import { StudentList } from "./Screens/Students/StudentList/StudentList";
import { TeacherAdd } from "./Screens/Teachers/TeachersAdd/TeacherAdd";
import { TeacherEdit } from "./Screens/Teachers/TeachersEdit/TeacherEdit";
import { TeacherList } from "./Screens/Teachers/TeacherList/TeacherList";
import { SubjectList } from "./Screens/Subjects/SubjectList/SubjectList";
import { SyllabusForm } from "./Screens/Syllabus/SyllabusForm/SyllabusForm";
import { SyllabusList } from "./Screens/Syllabus/SyllabusList/SyllabusList";
import { Authrouting } from "./Components/Routes/Authrouting";
import { ProtectedRoutes } from "./Components/Routes/ProtectedRoutes";
import { Admissionlist } from "./Screens/Admission/AdmissionList";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route element={<Authrouting />}>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/admission-list" element={<Admissionlist />} />
          <Route path="/class-form" element={<ClassForm />} />
          <Route path="/classes-list" element={<ClassList />} />
          <Route path="/exam-result" element={<ExamResult />} />
          <Route path="/exam-schedule" element={<ExamSehedule />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/fee-submission" element={<FeeSubmission />} />
          <Route path="/fee-voucher" element={<FeeVoucher />} />
          <Route path="/school-registration" element={<SchoolRegistration />} />
          <Route path="/add-new-student" element={<StudentAdd />} />
          <Route path="/update-student-name" element={<StudentEdit />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/add-new-teacher" element={<TeacherAdd />} />
          <Route path="/update-teacher-name" element={<TeacherEdit />} />
          <Route path="/teachers-list" element={<TeacherList />} />
          <Route path="/subject-list" element={<SubjectList />} />
          <Route path="/syllabous-form" element={<SyllabusForm />} />
          <Route path="/syllabous-list" element={<SyllabusList />} />
          <Route path="*" element={<PagenotFound />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
