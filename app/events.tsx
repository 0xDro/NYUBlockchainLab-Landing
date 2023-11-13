import Divider from "./divider";
import { Element } from "react-scroll";

export default function Event() {
  const takeToEvent = (link: string) => {
    window.open(link, "_blank");
  };
  const EventCard = ({ date, time, title, description, link }) => (
    <div className="text-white p-6 w-full flex space-x-10 lg:space-x-0 flex-row justify-between items-start my-15 z-10">
      <div className="w-4/12 text-white flex flex-col items-start lg:items-center">
        <p className="mb-4 lg:text-3xl font-medium text-white">{date}</p>

        <p className="mb-4 font-light text-white">{time}</p>
        <button
          onClick={() => takeToEvent(link)}
          className="lg:rounded-[36px] rounded-2xl lg:px-0 px-10 flex place-content-center bg-white lg:py-5 font-medium lg:text-xl text-black w-7/12 hover:bg-black hover:text-white hover:border-white hover:border"
        >
          RSVP here!
        </button>
      </div>

      <div className="w-4/6 lg:w-1/2 mr-12 flex flex-col items-start">
        <h5 className="mb-2 lg:text-3xl font-medium text-white">{title}</h5>
        <Divider />
        <p className="mt-5 font-light text-white lg:leading-8">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full h-full lg:px-4 z-10">
        <div className="w-full lg:h-[500px] overflow-hidden rounded-3xl my-28 relative">
          {/* <video autoPlay loop muted>
          <source src="/blockchain2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
          <img
            src="https://images.squarespace-cdn.com/content/v1/651c3133061ae37b37093e22/3b5db66f-2572-415e-a672-13344aea64f5/ruonne_blockchain_23c09e69-c026-4a08-a7b4-2d2e1abea0ef.png?format=2500w"
            className="object-cover object-center w-full h-full"
          ></img>
          <p className="absolute bottom-[10px] lg:text-7xl text-4xl font-medium whitespace-nowrap animate-marquee">
            {" "}
            UPCOMING EVENTS&nbsp;&nbsp; UPCOMING EVENTS&nbsp;&nbsp; UPCOMING
            EVENTS &nbsp;&nbsp;UPCOMING EVENTS
          </p>
        </div>
      </div>
      <Element name="events1">
        <div className="flex flex-col lg:space-y-12 space-y-6 w-full justify-start items-center">
          <EventCard
            date="Thursday, November 16th"
            time="12:00PM, RSVP to view location!"
            title="How to Apply & Succeed at Alliance DAO"
            description="Alliance DAO is the leading crypto accelerator & founder community. Join us to hear more on what it takes to build a good Web3 company. Don't miss this chance to lay the groundwork for your Web3 startup journey!"
            link="https://partiful.com/e/p6rNbjEonT6JhCii4fux"
          />
          <EventCard
            date="Thursday, October 26th"
            time="4:30PM, RSVP to view location!"
            title="The Graph Workshop and Hackathon"
            description="Learn, hack, and grow with Web3. Join contributors of The Graph ecosystem for a one day on-campus event filled with talks, swag, and prizes."
            link="https://partiful.com/e/p6rNbjEonT6JhCii4fux"
          />
        </div>
      </Element>
    </>
  );
}
