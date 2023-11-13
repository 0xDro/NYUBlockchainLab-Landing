export default function Footer() {
  return (
    <div className="flex flex-row justify-between lg:space-x-0 space-x-12 w-full mt-36 z-10">
      <div className="flex flex-col  w-1/4">
        <p className="text-white lg:text-2xl font-normal">Interact with us!</p>
        <div className="flex flex-col space-y-4 mt-5">
          <a
            href="https://discord.gg/CxgXrpZe"
            target="_blank"
            className="text-white lg:text-lg font-light underline cursor-pointer"
          >
            Discord
          </a>
          <a
            href="https://github.com/NYUBlockchainLab"
            target="_blank"
            className="text-white lg:text-lg font-light underline cursor-pointer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/BlockchainNYU"
            target="_blank"
            className="text-white lg:text-lg font-light underline cursor-pointer"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="flex flex-col w-1/">
        <p className="text-white lg:text-2xl font-medium">NYU Blockchain Lab</p>
        <p className="text-white font-light mt-3">
          NYU Tandon School of Engineering{" "}
        </p>
        <a
          href="mailto::blockchainlabnyu@gmail.com"
          target="_blank"
          className="text-white font-light underline mt-3 cursor-pointer"
        >
          blockchainlabnyu@gmail.com
        </a>
      </div>
    </div>
  );
}
