import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { BiHomeAlt } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { RiFileListLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

import React from "react";
import FeedCard from "@/components/FeedCard";



interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeAlt />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    icon: <MdNotifications />,
  },
  {
    title: "Messages",
    icon: <IoMail />,
  },
  {
    title: "Bookmarks",
    icon: <RiFileListLine />,
  },
  {
    title: "Lists",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <IoPersonSharp />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-[110px]">
      <div className="col-span-3 pt-1  ">
        <div className="text-4xl h-fit w-fit  hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
          <FaXTwitter />
        </div>
        <div className="pr-4">
          <ul className="mt-4 ">
            {sideBarMenuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 p-2 text-2xl hover:bg-gray-700 rounded-full cursor-pointer transition-all w-fit px-4"
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#1C9BEF] p-4 rounded-full w-full mt-4 text-2xl ">
            Post
          </button>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll  border-gray-600">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
