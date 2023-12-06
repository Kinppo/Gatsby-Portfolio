import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/styles.css";
import "../assets/icons/font-awesome-4.7.0/css/font-awesome.min.css";
import Seo from "../Components/seo";
import Header from "../Components/Header";
import Showcase from "../Components/Showcase";
import About from "../Components/About";
import Jobs from "../Components/Jobs";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import { Portfolio } from "../Components/Portfolio";
import Posts from "../Components/Posts";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import Pricing from "../Components/Pricing";

const IndexPage = () => (
  <div className="dark-vertion black-bg">
    <Seo title="Mohammed Amaou" />
    <Header />
    <Showcase />
    <About />
    <Jobs />
    <Skills />
    <Experience />
    <Portfolio />
    <Pricing />
    <Posts />
    <Reviews />
    <Footer />
  </div>
);

export default IndexPage;
