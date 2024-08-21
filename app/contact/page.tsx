import { Metadata } from "next";
import { Contact } from "../../components";

export const metadata: Metadata = {
  title: "Contact us - Abhyuday Singh",
  description: "Full Stack Developer and Competitive Programmer",
};

const Page = () => {
  return <Contact />;
};

export default Page;
