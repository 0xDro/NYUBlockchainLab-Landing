export default function Mission() {
  return (
    <div className="w-full h-full flex place-content-center bg-gray-500 text-black">
      <div className="flex  flex-col justify-between w-5/6 items-center py-4 space-y-6  ">
        <p className="text-medium text-3xl mb-6">Our Mission</p>

        <div className="rounded-lg rounded-white text-center border-[1px] border-black p-5 leading-8 ">
          Testing distributed systems like blockchains is no easy feat. In this
          talk, we'll deep dive into how the Ethereum Foundation does this and
          how Kurtosis is a key part of their stack for testing complex protocol
          upgrades such as The Merge.Along the way, I'll show how you can
          immediately start using Kurtosis to start developing + testing
          blockchain systems like Ethereum on your own and we'll learn more
          broadly about the software tools used to dev/test distributed
          applications in both web3 and web2.
        </div>
      </div>
    </div>
  );
}
