import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiCodeforces } from "react-icons/si";
import Link from "next/link";
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../fonts/Orbitron/static/Orbitron-Black.ttf",
});
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});

const Profile = () => {
  return (
    <div className=" bg-white min-h-screen flex justify-center pb-10 pt-32 lg:p-0 dark:bg-gray-900">
      <section className="container mx-auto text-xl grid md:grid-cols-3 gap-8 px-10  md:items-center md:text-left">
        <div className="flex justify-center">
        <Image
  src="/assets/images/abhyudaysingh_profilpic-modified.png"
  width={350}
  height={350} 
  alt=""
  className="hover:scale-100 hover:shadow-md rounded-full"
/>


        </div>
        <div className="md:col-span-2">
          <p
            className={`${EduNSWACTFoundation.className} text-5xl inline-block bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-red-900`}
          >
            I am,
          </p>
          <h1
            className={`${Orbitron.className} dark:text-white text-3xl md:text-5xl pb-8 my-4 text-blue-950`}
          >
            Abhyuday Singh
          </h1>
          <div className="text-gray-950 dark:text-gray-100">
            <p className="text-xl">
              As a competitive programmer, I excel at solving complex challenges. As a Full Stack Developer, I leverage my skills in both front-end and back-end technologies to create high-quality web applications.
            </p>
          </div>
          <div className="flex text-gray-600 dark:text-gray-100 justify-center w-full gap-3 py-4">
            <Link
              target="_blank"
              
              href="https://github.com/Lone24wolf"
            >
              <BsGithub size={25} />
            </Link>
            
            <Link
              target="_blank"
           
              href="/contact"
            >
              <MdEmail size={25} />
            </Link>
            <Link
              target="_blank"
           
              href="https://codeforces.com/profile/Abhyuday_Singh"
            >
              <SiCodeforces size={25} />
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};
export default Profile;
