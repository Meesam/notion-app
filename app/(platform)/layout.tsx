import { ClerkProvider } from "@clerk/nextjs";

const PlatFormlayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatFormlayout;
