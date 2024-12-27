import React from "react";
import Header from "../components/Header";
import FindCenters from "../assets/FindCenters.png";
import FindSection from "../assets/FindSection.png";
import { Link } from "react-router-dom";
import DiscountCarousel from "../components/DiscountCarousal";
import DoctorCarousal from "../components/DoctorCarousal";
import Special from "../assets/SpecialisationSection.png";
import PatientCaring from "../assets/PatientCaringSection.png";
import Blog from "../assets/BlogSection.png";
import OurFamily from "../assets/OurFamilySection.png";
import FAQ from "../assets/FAQSection.png";
import Downloads from "../assets/DownloadSection.png";
import Footer from "../assets/FooterSection.png";

function HomePage() {
  return (
    <div>
      <Header />
      <Link to="/search">
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={FindCenters}
          alt="Find Centers"
        />
        <img
          style={{
            width: "100%",
            height: "auto",
          }}
          src={FindSection}
          alt="Find Section"
        />
      </Link>
      <DiscountCarousel />
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={Special}
        alt="Specialization Section"
      />
      <DoctorCarousal />
      {/* ===========Static Sections Below========= */}

      {/* Patient Caring Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={PatientCaring}
        alt="PatientCaring"
      />

      {/* Blog Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={Blog}
        alt="Blog"
      />

      {/* Our Family Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={OurFamily}
        alt="OurFamilySection"
      />

      {/* FAQ Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={FAQ}
        alt="FAQ Section"
      />

      {/* Downloads Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={Downloads}
        alt="Downloads Section"
      />

      {/* Footer Section Below*/}

      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={Footer}
        alt="Footer Section"
      />
    </div>
  );
}

export default HomePage;
