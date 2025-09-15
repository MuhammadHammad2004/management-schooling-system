import React, { useEffect, useRef } from "react";
import coursel6 from "../../Components/Images/coursel6.avif";
import coursel7 from "../../Components/Images/coursel5.jpg";
import coursel8 from "../../Components/Images/Coursel.jpg";
import coursel1 from "../../Components/Images/coursel3.webp";
import coursel2 from "../../Components/Images/coursel.webp";
import coursel3 from "../../Components/Images/coursel1.jpg";
import coursel4 from "../../Components/Images/coursel2.jpg";

const Carousel = () => {
  const slides = [
    coursel6,
    coursel2,
    coursel3,
    coursel4,
    coursel7,
    coursel8,
    coursel1,
  ];
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % slides.length;
      document
        .querySelectorAll("[data-carousel-item]")
        .forEach((el, i) =>
          el.classList.toggle("hidden", i !== indexRef.current)
        );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg border-1">
      {slides.map((src, i) => (
        <div
          key={i}
          data-carousel-item
          className={`absolute inset-0 duration-700 ease-in-out ${
            i !== 0 ? "hidden" : ""
          }`}
        >
          <img
            src={src}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={`Slide ${i + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
