const TeamMembers: { name: string; role: string; image: string }[] = [
  {
    name: "Ayesha Kiani",
    role: "Faculty Advisor",
    image: "/ayesha.jpg",
  },
  {
    name: "Ben Liang",
    role: "President",
    image: "/ben.jpg",
  },
  {
    name: "Ruben Garcia",
    role: "Vice President",
    image: "/ruben.jpg",
  },
  {
    name: "Kylie Wong",
    role: "Head Of Marketing",
    image: "/kylie.jpg",
  },
  {
    name: "Alejandro Gala",
    role: "Head Of Community",
    image: "/alejandro.jpg",
  },
  {
    name: "Nour Acogny",
    role: "Secretary",
    image: "/nour.jpg",
  },
];

export default function Team() {
  const renderPerson = (
    name: string,
    role: string,
    image: string,
    key: number
  ) => {
    return (
      <div
        key={key}
        className="overflow-hidden flex flex-col items-center justify-between space-y-2 mt-10"
      >
        <div className="rounded-full w-32 h-32 lg:h-44 lg:w-44 overflow-hidden">
          <img
            src={image}
            alt="Team Member"
            className={`h-full w-full object-cover object-top ${
              name === "Ruben Garcia" ? "object-bottom" : "object-top"
            }`}
          ></img>
        </div>
        <p className="text-xl font-medium text-white">{name}</p>
        <p className="text-xs font-light text-white">{role.toUpperCase()}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full mt-52 z-10">
      <p className="text-white lg:text-5xl text-2xl font-medium">The Team</p>
      <div className="w-full rounded-3xl p-10 justify-center items-center flex lg:flex-row flex-col flex-wra">
        <div className="lg:w-1/3">
          {TeamMembers.slice(0, 2).map((member, index) => {
            return renderPerson(member.name, member.role, member.image, index);
          })}
        </div>
        <div className="lg:w-1/3">
          {TeamMembers.slice(2, 4).map((member, index) => {
            return renderPerson(member.name, member.role, member.image, index);
          })}
        </div>
        <div className="lg:w-1/3">
          {TeamMembers.slice(4, 6).map((member, index) => {
            return renderPerson(member.name, member.role, member.image, index);
          })}
        </div>
      </div>
    </div>
  );
}
