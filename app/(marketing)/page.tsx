import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const MarketingPage = () => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div className=" flex items-center justify-center flex-col">
        <h1 className=" text-5xl font-bold">Write, plan, share.</h1>
        <h1 className=" text-5xl font-bold">With AI at your side.</h1>
        <h3 className=" text-2xl mt-5">
          Notion is the connected workspace where better, faster work happens.
        </h3>
        <Button className="mt-5">
          Get Notion free
          <ArrowRight className="mx-2 h-4 w-4" />
        </Button>
        <div className="mt-10">
          <Image src="/home-hero.webp" alt="home" width={600} height={600} />
        </div>
        <div className="flex flex-row space-x-4">
          <div className=" h-40 w-40 bg-slate-200 border rounded-md flex justify-center items-center">
            Engineering
          </div>
          <div className=" h-40 w-40 bg-slate-200 border rounded-md flex justify-center items-center">
            Design
          </div>
          <div className=" h-40 w-40 bg-slate-200 border rounded-md flex justify-center items-center">
            Product
          </div>
          <div className=" h-40 w-40 bg-slate-200 border rounded-md flex justify-center items-center">
            HR
          </div>
        </div>
        <div className="mt-5 flex flex-row items-center justify-center">
          <Image
            src="/notion-parade.webp"
            alt="home"
            width={200}
            height={200}
          />
          <p className="text-3xl font-bold">Powerful building blocks</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
