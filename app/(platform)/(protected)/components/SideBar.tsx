import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

const SideBar = async () => {
  const user = await currentUser();

  return (
    <div className="w-60 bg-slate-200 p-3">
      <div className="flex-col">
        <div className="flex space-x-2">
          <UserButton afterSignOutUrl="/" />
          <p>{`${user?.firstName} ${user?.lastName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
