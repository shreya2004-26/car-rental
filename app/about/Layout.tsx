"use client";

import AboutUs from "@/components/AboutUs";
import ExploreRentals from "@/components/ExploreRentals";
import Footer from "@/components/Footer";
import OurJourney from "@/components/OurJourney";
import Testinomial from "@/components/Testinomial";
import React from "react";

const Layout = () => {
  return (
    <>
      <div className="py-5">
        <AboutUs />
        <ExploreRentals />
        <OurJourney />
        <Testinomial />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
