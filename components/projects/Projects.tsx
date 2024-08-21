"use client";

import { BsGithub } from "react-icons/bs";
import { SeeMoreButton } from "../ui";
import { usePathname } from "next/navigation";
import Item from "./Item";
// import { Report } from "../";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Projects = () => {
  const pathName = usePathname();
 
  return (
    <>
      <section id="projects" className="pt-20 dark:bg-gray-900">
        <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
          <h1
            className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
          >
            Notable Projects
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <Item
              name="TradeMate"
              headerImg="/assets/images/Trademate.png"
              description="Trademate is a full-stack website using HTML, CSS, React with TypeScript(TSX) for the front end. Integrated backend services using Django, providing RESTful APIs for data retrieval from MongoDB and prediction generation."
              techs={["React", "bootstrap","Django","Typescript","MongoDB"]}
              headerLinks={{
                github: {
                  url: "https://github.com/Lone24wolf/TradeMate",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="AgriConnect"
              headerImg="/assets/images/react-code.webp"
              description="A full stack website created with React, Node, express, MySqL where you can Hire Farm workers to work on your farms ."
              techs={["React", "NodeJS","ExpressJS","MySQL"]}
              headerLinks={{
                github: {
                  url: "https://github.com/Lone24wolf/AgriConnect",
                  icon: <BsGithub />,
                },
              }}
            />

            <Item
              name="InvenTrack"
              headerImg="/assets/images/javascript-code.webp"
              description="InvenTrack is a web application designed for efficient inventory management using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to track and manage inventory items with ease, providing functionalities such as adding, updating, and removing items. The platform features a user-friendly interface for viewing inventory details, generating reports, and monitoring stock levels. InvenTrack aims to streamline inventory processes, enhance visibility, and support informed decision-making for businesses and individuals."
              techs={["React","NodeJS","ExpressJS","MongoDB"]}
              headerLinks={{
                github: {
                  url: "https://github.com/Lone24wolf/InvenTrack",
                  icon: <BsGithub />,
                },
              }}
            />

            <Item
              name="Portfolio (personal website)"
              headerImg="/assets/images/Portfoliowebsite.png"
              description="This portfolio was developed with NextJs (Typescript). By using NextJs, the developer can create reusable UI components that can be used across the entire application, making it easier to maintain and update. NextJs also provides a virtual DOM (Document Object Model) that allows for faster updates to the user interface compared to traditional web development techniques."
              seeMore={{
                url: "https://github.com/Lone24wolf/Portfolio",
                text: "code source",
                before: "Checkout the",
                after: "of this website.",
              }}
              techs={[
                "next.js",
                "typescript",
                "tailwind",
                "nodejs",
                "express",
                "firebase",
              ]}
              headerLinks={{
                github: {
                  url: "https://github.com/Lone24wolf/Portfolio",
                  icon: <BsGithub />,
                },
              }}
            />

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
