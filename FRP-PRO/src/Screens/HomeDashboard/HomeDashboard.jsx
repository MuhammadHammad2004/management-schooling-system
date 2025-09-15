import Carousel from "../../Components/Coursal/Coursal";
import HomeCards from "../../Components/HomeCard/HomeCards";
import { Navbar } from "../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

export const HomeDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="relative top-30">
        <div className="px-10">
          <Carousel />
        </div>
        <h1 className="text-center text-6xl font-extrabold  pt-10 uppercase font-serif">
          Our Department
        </h1>
        <HomeCards />
        <br />
        <Footer />
      </div>
    </div>
  );
};
