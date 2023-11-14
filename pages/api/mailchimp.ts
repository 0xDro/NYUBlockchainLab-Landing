import mailchimp from "@mailchimp/mailchimp_marketing";

export default async function handler(req: any, res: any) {
  const { email } = req.body;

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.SERVER_PREFIX,
  });
  if (process.env.LIST_ID) {
    try {
      const response = await mailchimp.lists.addListMember(
        process.env.LIST_ID,
        {
          email_address: email,
          status: "subscribed",
        }
      );
      if ("id" in response) {
        res.status(200).json({ id: response.id });
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error: any) {
      if (error.message === "Bad Request") {
        res.status(400).json({ message: "Already subscribed" });
      } else {
        res.status(500).json({ message: "Failed to subscribe" });
      }
    }
  } else {
    res.status(500).json({ message: "Failed to subscribe" });
  }
}
