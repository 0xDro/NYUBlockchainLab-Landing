import MailchimpSubscribe from "react-mailchimp-subscribe";

import EmailForm from "./emailForm";

export default function SectionOne() {
  return (
    <>
      <div className="flex w-full my-20 z-10 lg:mt-[435px] lg:mb-10 p-4">
        <div className="w-full lg:w-5/6 flex-col space-y-8">
          <p className="lg:text-3xl text-xl font-normal leading-normal">
            We are a student organization aiming to bring Blockchain and
            Distributed Ledger Technology to New York University. We collaborate
            with student developers and researchers.
          </p>

          <EmailForm />
        </div>
      </div>
    </>
  );
}
