import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="flex flex-row items-center pl-5 h-14 border-b-2">
      <div className="space-x-6">
        <Link href="" className=" text-lg font-semibold ">
          Notion
        </Link>

        <Link href="">Product</Link>
        <Link href="">Download</Link>
        <Link href="">Solution</Link>
        <Link href="">Resources</Link>
        <Link href="">Pricing</Link>
      </div>
      <div className=" ml-auto space-x-6 pr-5">
        <Link href="/sign-in">Sign In</Link>
        <Link href="">Request a demo</Link>
        <Button>
          <Link href="/sign-up">Get Notion free</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
