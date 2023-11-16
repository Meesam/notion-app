import { ClerkProvider } from "@clerk/nextjs";
import SideBar from "./(protected)/components/SideBar";

const PlatFormlayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatFormlayout;
