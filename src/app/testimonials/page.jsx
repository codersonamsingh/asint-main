import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import AboutArea from "../../components/About/AboutArea";
import FunFacts from "../../components/Common/FunFacts";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import Solution from "../../components/Common/Solution";
import Testimonials from "../../components/Common/Testimonials";
import OurTeam from "../../components/Common/OurTeam";
import SubscribeFluid from "../../components/Common/SubscribeFluid";
import PartnerWithTitle from "../../components/Common/Partner/PartnerWithTitle";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* <PageHeader
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="About Us"
      /> */}


      <FunFacts />

      <WhyChooseUs />

      <Solution />

      <Testimonials />

      <OurTeam />

      <SubscribeFluid />

      <PartnerWithTitle />

      <Footer />
    </>
  );
}
