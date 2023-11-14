import Divider from "./divider";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to: any, element: any) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to: any, element: any) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: any) => {
    console.log(to);
  };
  return (
    <>
      <div className="z-20 fixed py-6 px-6 w-full items-center justify-between font-sans text-xl lg:flex bg-black text-white ">
        <a
          onClick={scrollToTop}
          className="lg:text-3xl font-medium text-center lg:text-left hover:text-[31px] cursor-pointer"
        >
          NYU Blockchain Lab
        </a>

        <div className="lg:flex hidden items-center justify-between max-w-md lg:justify-end  ">
          <Link to="events1" containerId="main-container">
            <p className="text-md font-thin px-4  hover:text-white hover:border-b-2 hover:border-white cursor-pointer">
              Events
            </p>
          </Link>

          <p className="text-md font-thin px-4  hover:text-white hover:border-b-2 hover:border-white cursor-pointer">
            Mission
          </p>

          <p className="text-md font-thin px-4  hover:text-white hover:border-b-2 hover:border-white cursor-pointer">
            Research
          </p>
          <p className="text-md font-thin px-4 hover:text-white hover:border-b-2 hover:border-white cursor-pointer">
            Team
          </p>
        </div>
      </div>
    </>
  );
}
