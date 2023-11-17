"use client";
import { Search, Bell, Settings, PlusCircle } from "lucide-react";

const SystemNav = () => {
  return (
    <div className="w-full">
      <div className="flex-col space-y-2">
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <Search size={15} />
          <p className="text-slate-500 text-sm">Search</p>
        </div>
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <Bell size={15} />
          <p className="ml-2 text-slate-500 text-sm">Updates</p>
        </div>
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <Settings size={15} />
          <p className="ml-2 text-slate-500 text-sm">Settings & Members</p>
        </div>
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <PlusCircle size={15} />
          <p className="ml-2 text-slate-500 text-sm">New Page</p>
        </div>
      </div>
    </div>
  );
};

export default SystemNav;
