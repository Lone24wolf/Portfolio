// import BlogSection from "@/components/blog/BlogSection";
import { Profile, Skills, Projects} from "../components";

export default function page() {
  return (
    <div className=" dark:bg-gray-900 dark:text-black text-lg">
      <Profile />
      <Projects />
      <Skills />
    </div>
  );
}
