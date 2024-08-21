import {
  FaChrome,
  FaGitAlt,
  FaInternetExplorer,
  FaReact,
  FaUbuntu,
  FaCode
} from "react-icons/fa";
import { SiCodeforces,SiThealgorithms } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import Item from "./Item";
import localFont from "next/font/local";

import { TbBrandVscode, TbSql } from "react-icons/tb";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
const Skills = (): JSX.Element => {
  return (
    <div
      id="Skills"
      className="container mx-auto md:px-10 lg:px-20 xl:px-32 dark:bg-gray-900 00  text-black px-10 dark:text-white pt-10 flex items-center flex-col justify-center"
    >
      <div className="">
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
        >
          Skills
        </h1>
        <div className="grid gap-8  md:grid-cols-2">
          <div>
            <Item
              title="Web Development"
              desc="I specialize in providing a range of web services, including custom website development, MERN stack solutions, and e-commerce platforms. I focus on creating tailored, high-performance web applications that meet specific client needs and enhance user experience."
              icon={{
                source: <FaInternetExplorer size={60} />,
                color: "text-sky-600",
                bg: "bg-sky-200",
              }}
              toolIcons={[
                {
                  source: <FaGitAlt className={"text-3xl"} />,
                  color: "text-gray-900",
                },
                {
                  source: <FaReact className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  source: <FaChrome className={"text-3xl"} />,
                  color: "text-green-700",
                },
                {
                  source: <TbBrandVscode className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              title="Competitive Programming and Problem Solving"
              desc="As a specialist on Codeforces, I have a strong background in problem-solving and competitive programming. I excel in tackling complex coding challenges, especially those involving data structures and algorithms. My competitive programming experience sharpens my analytical thinking and ability to create efficient solutions under time constraints."
              icon={{
                source: <SiCodeforces size={60} />,
                color: "text-red-600",
                bg: "bg-red-200",
              }}
              toolIcons={[
                {
                  source: <TbBrandCpp className={"text-3xl"} />,
                  color: "text-red-600",
                },
                {
                  source: <SiThealgorithms className={"text-3xl"} />,
                  color: "text-yellow-600",
                },

                {
                  source: <FaUbuntu className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  source: <TbBrandVscode className={"text-3xl"} />,
                  color: "text-gray-700",
                },
                {
                  source: <FaCode className={"text-3xl"} />,
                  color: "text-pink-800",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
