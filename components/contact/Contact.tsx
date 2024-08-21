"use client";

import { usePathname } from "next/navigation";
import Form from "./Form";

import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Contact = () => {
  const pathName = usePathname();
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900">
      <div className={`container mx-auto px-10 md:px-20 pt-32 lg:pt-10 pb-10`}>
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-3xl md:text-5xl pb-10 my-4 text-blue-950`}
        >
          Contact Me
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="">
              <h1 className="text-3xl">Abhyuday Singh</h1>
              <br />
              <p>Competitive Programmer and Full Stack Web Developer</p>
              <br />
              <p>IIIT  JABALPUR, MADHYA  PRADESH</p>
              <br />
              <p>
                Email:{" "}
                <a className="text-blue-700" href="mailto:abhyudaysingh1729@gmail.com">
                  abhyudaysingh1729@gmail.com
                </a>
              </p>
              <br />
              <p>
                {" "}
                Phone:{" "}
                <a className="text-blue-700" href="+91 7898308826">
                  +91 7898308826
                </a>
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
