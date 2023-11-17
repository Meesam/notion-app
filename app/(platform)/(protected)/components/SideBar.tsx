import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import NavTree from "./NavTree";

const SideBar = async () => {
  const user = await currentUser();

  return (
    <div className="w-60 bg-slate-200 p-3 border-r-2">
      <div className="flex-col">
        <div className="flex space-x-2">
          <UserButton afterSignOutUrl="/" />
          <p>{`${user?.firstName} ${user?.lastName}`}</p>
        </div>
        <div className="mt-5">
          <NavTree />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
