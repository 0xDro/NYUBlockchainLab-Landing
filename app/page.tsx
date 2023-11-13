"use client";

import Image from "next/image";
import Header from "./header";
import SectionOne from "./sectionOne";
import Divider from "./divider";
import Mission from "./mission";
import Event from "./events";
import Footer from "./footer";
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
          <Footer />
        </div>
      </main>
    </>
  );
}
