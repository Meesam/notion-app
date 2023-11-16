import { ClerkProvider } from "@clerk/nextjs";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const PlatFormlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="container" className="flex h-full">
      <div className="flex">
        <SideBar />
      </div>
      <div className="flex-col w-full">
        <Header />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default PlatFormlayout;
