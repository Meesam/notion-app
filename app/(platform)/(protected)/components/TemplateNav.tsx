"use client";
import { Trash, Trello, Import, LayoutPanelTop } from "lucide-react";

const TemplateNav = () => {
  return (
    <div className="w-full">
      <div className="flex-col space-y-2">
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <Trello size={15} />
          <p className="text-slate-500 text-sm">Create a teamspace</p>
        </div>
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <LayoutPanelTop size={15} />
          <p className="ml-2 text-slate-500 text-sm">Templates</p>
        </div>
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <Import size={15} />
          <p className="ml-2 text-slate-500 text-sm">Import</p>
        </div>
        <div className="flex space-x-2 items-center h-6 cursor-pointer hover:bg-slate-300 rounded-sm pl-2">
          <Trash size={15} />
          <p className="ml-2 text-slate-500 text-sm">Trash</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateNav;
