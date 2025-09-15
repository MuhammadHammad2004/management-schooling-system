import React, { useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const footerImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1551434678-e076c223a941?auto=format&fit=crop&w=600&q=60",
];

const Footer = () => {
  const bgRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      bgRef.current = (bgRef.current + 1) % footerImages.length;
      document
        .querySelectorAll("[data-footer-bg]")
        .forEach((el, i) =>
          el.classList.toggle("opacity-0", i !== bgRef.current)
        );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("animated-footer");
    const obs = new IntersectionObserver(
      ([entry]) =>
        entry.target.classList.toggle("opacity-100", entry.isIntersecting),
      { threshold: 0.2 }
    );
    footer && obs.observe(footer);
    return () => footer && obs.disconnect();
  }, []);

  return (
    <footer
      id="animated-footer"
      className="relative opacity-0 transition-opacity duration-700"
    >
      <div className="absolute inset-0 overflow-hidden rounded-t-xl">
        {footerImages.map((img, idx) => (
          <div
            key={idx}
            data-footer-bg
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              idx === 0 ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Box component="div" className="relative z-10 text-white py-10">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              {["Home", "Admission", "Teachers", "Students", "Contact"].map(
                (l) => (
                  <Link
                    key={l}
                    href={`/${l.toLowerCase()}`}
                    underline="hover"
                    color="inherit"
                    className="block mb-1 hover:-translate-y-0.5 transition-transform"
                  >
                    {l}
                  </Link>
                )
              )}
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" className="mb-1">
                School Management System, Knowledge City, IN 560037
              </Typography>
              <Typography variant="body2">
                info@school.edu | +91 987 654 3210
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="cursor-pointer hover:scale-125 transition-transform"
                    fontSize="large"
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className="py-2">
        <Typography
          variant="body2"
          align="center"
          className="mt-8 opacity-70 text-white"
        >
          © {new Date().getFullYear()} Your School Name. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
