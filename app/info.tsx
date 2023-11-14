import EmailForm from "../pages/emailForm";

export default function Info() {
  return (
    <>
      <div className="flex flex-row w-full z-10 mt-48  p-4">
        <div className="flex flex-col w-full lg:w-1/3 space-y-8">
          <img src="/cartoon.png" alt="About"></img>
        </div>
        <div className="flex flex-col w-2/3 px-3 text-white">
          <div className="flex flex-col h-1/3 w-full  justify-between py-6 items-center text-center">
            <p className="text-white lg:text-lg font-medium">
              Education is what we are about with workshops every week
            </p>
            <div className="w-2/3 border border-b-2 border-white"></div>
          </div>
          <div className="flex flex-col h-1/3 w-full  justify-between py-6 items-center text-center">
            <p className="text-white lg:text-lg font-medium">
              We want to build the many opportunities htat arise in the crypto
              space. Wether public goods or for protocols, we want to build
            </p>
            <div className="w-2/3 h-[1px] border-b-2 border-white"></div>
          </div>
          <div className="flex flex-col h-1/3 w-full justify-between py-6 items-center text-center">
            <p className="text-white lg:text-lg font-medium">
              We want to push the boundries of research in the crypto space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
