"use client";
import Header from "./header";
import SectionOne from "../pages/sectionOne";
import Event from "./events";
import Footer from "./footer";
import Mission from "./mission";
import Team from "./team";
import Info from "./info";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div
          className="flex min-h-screen flex-col items-center p-10 relative bg-black text-white"
          id="main-container"
        >
          <div className="absolute top-0 left-50 right-0 bottom-0 z-0">
            <img src="/home4.png"></img>
          </div>
          <SectionOne />
          <Event />
          <Team />
          {/* <Info /> */}
          <Mission />

          <div className="absolute bottom-0 left-0 right-0 z-0">
            <img
              src="/home7.png"
              alt="Background Image"
              className="w-full"
            ></img>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
