import { useRouter } from "next/router";
import requests from "../utils/requests";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul className=" py-2 flex items-center gap-4 px-10 sm:px-20 sm:space-x-20 overflow-x-scroll scrollbar-hide  text-2xl whitespace-nowrap space-x-10">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <li
            className="cursor-pointer last:pr-24 transition duration-100 hover:scale-125 hover:text-white active:text-red-500 transform"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
};

export default Navbar;
