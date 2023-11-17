import React from "react";
import {
  History,
  MessageSquare,
  Star,
  MoreHorizontal,
  MoreHorizontalIcon,
} from "lucide-react";

const Header = () => {
  return (
    <div className="sticky bg-transparent h-14 flex items-center mx-6">
      <div className="flex justify-between w-full">
        <p>Getting Started</p>
        <div className="flex space-x-5 items-center">
          <p className="text-sm text-gray-400">Edited 4m ago</p>
          <p>Share</p>
          <MessageSquare />
          <History />
          <Star />
          <MoreHorizontalIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
