import {
  CheckBadgeIcon,
  HomeIcon,
  BoltIcon,
  UserIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex items-center justify-evenly flex-grow max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={BoltIcon} />
        <HeaderItem title="Verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="Collections" Icon={RectangleStackIcon} />
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu"
      />
    </header>
  );
};

export default Header;
