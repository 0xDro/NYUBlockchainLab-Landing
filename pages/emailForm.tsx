import dotenv from "dotenv";
import { useState } from "react";
dotenv.config();

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [localStatus, setLocalStatus] = useState(
    "Subscribe to our newsletter!"
  );
  const [error, setError] = useState("");

  const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.currentTarget.value);
    setLocalStatus("Subscribe to our newsletter!");
  };

  const submit = async () => {
    if (!validateEmail(email)) {
      setLocalStatus("Invalid Email");
      setEmail("");
      return;
    }
    if (localStatus !== "Thank you for subscribing!") {
      try {
        const response = await fetch("/api/mailchimp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          setLocalStatus("Already subscribed");
          throw new Error("Already subscribed");
        }

        setLocalStatus("Thank you for subscribing!");
      } catch (message: any) {
        setLocalStatus(message);
      }
    }

    setEmail("");
  };

  return (
    <div className="lg:flex lg:flex-col lg:space-y-4">
      <div className="flex flex-col lg:flex-row ">
        <input
          type="email"
          placeholder={localStatus}
          value={email}
          onChange={handleEmailChange}
          className={`mr-2 w-full lg:w-2/5 bg-black border-[1px] border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-black caret-white`}
        />
        <button
          onClick={submit}
          className={`lg:bg-black ${
            localStatus === "Invalid Email" ? "placeholder:text-red-600" : ""
          } bg-white hover:bg-white  text-black hover:text-black border lg:mt-0 mt-3 border-gray-200 hover:border-black lg:text-white font-bold lg:py-2 lg:px-4 rounded`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
