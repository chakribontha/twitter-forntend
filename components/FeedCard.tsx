import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";

import { FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-700 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/125398913?v=4"
            alt="image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h4>Chakri</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-between mt-5 text-xl">
            <div>
              <FiMessageCircle />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
           
            <div>
              <FaRegHeart />
            </div>
            <div>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
