import Projects from "../../components/projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhyuday Singh- Projects",
  description: "Notable projects | Abhyuday Singh",
};

const Page = () => {
  return <Projects />;
};

export default Page;
