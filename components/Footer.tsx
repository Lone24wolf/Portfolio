// @ts-ignore
// @ts-nocheck

"use client";
import ContactForm from "./contact/Form";
import {
  BsGithub,
  BsLinkedin,
  BsArrowBarRight,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import buildInfo from "../build-info.json";
import packageJson from "../package.json";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { FaArrowAltCircleRight } from "react-icons/fa";
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});
const appVersion = packageJson.version;

const ImportantLinks = ({ href, text }) => {
  return (
    <li className="mb-2 hover:text-gray-500">
      <a className="flex text-lg gap-2 items-center" href={href}>
        <FaArrowAltCircleRight /> {text}
      </a>
    </li>
  );
};

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className=" text-white text-xl bg-gray-900 py-8">
      <div className="container mx-auto grid grid-cols-4 gap-10 px-8 md:px-20">
        {pathname !== "/contact/" && (
          <div className="col-span-4 md:col-span-2">
            <ContactForm />
          </div>
        )}

        <div
          className={`col-span-4 text-center text-gray-300 ${
            pathname === "/contact/" ? "md:-col-span-4" : "md:col-span-2"
          }`}
        >
          <h2 className={`${EduNSWACTFoundation.className} mb-3 text-3xl`}>
            What's next?
          </h2>
          <h3 className="text-2xl mb-3">Let's connect</h3>
          <p className="first-letter:text-5xl">
            If you have any suggestion, feedback, opportunity, or are interested
            in collaborating on a project, we would love to hear from you!
            Please feel free to reach out to us using the contact details
            provided below. If you are expecting a reply, kindly mention your
            contact details in your message.
          </p>
          <div className="flex gap-3 pt-8 justify-center items-center">
            <a aria-label="Github account" href="https://github.com/Lone24wolf">
              <BsGithub size={25} />
            </a>
          
            <a aria-label="Email address" href="/contact/">
              <MdEmail size={25} />
            </a>
          </div>
          <div className="py-3 mt-5">
            <h3 className="py-5 text-3xl">Other Links</h3>
            <ul className="grid grid-cols-2 place-items-center">
              <ImportantLinks href="/contact/" text="Contact Me" />
            </ul>
            <ul className="grid grid-cols-2 place-items-center">
              <ImportantLinks href="https://codeforces.com/profile/Abhyuday_Singh" text="Codeforces" />
            </ul>
          </div>
        </div>

        <div className="text-center text-lg text-gray-300 col-span-4">
        </div>
      </div>
    </div>
  );
};

export default Footer;
