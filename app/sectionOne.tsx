export default function SectionOne() {
  return (
    <div className="flex w-full my-20 z-10 lg:mt-[435px] lg:mb-10 p-4">
      <div className="w-full lg:w-5/6 flex-col space-y-8">
        <p className="lg:text-3xl text-xl font-normal leading-normal">
          We are a student organization aiming to bring Blockchain and
          Distributed Ledger Technology to New York University. We collaborate
          with student developers and researchers.
        </p>
        <div className="flex flex-col lg:flex-row ">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="mr-2 w-full lg:w-2/5 bg-black text-white border-[1px] border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-black caret-white"
          />
          <button className="lg:bg-black bg-white hover:bg-white  text-black hover:text-black border lg:mt-0 mt-3 border-gray-200 hover:border-black lg:text-white font-bold lg:py-2 lg:px-4 rounded">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
