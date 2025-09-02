"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { GiScarabBeetle, GiEgyptianProfile } from "react-icons/gi";
import { personal } from "@/data/index";
import Socials from "@/components/home/Socials";
import Photo from "@/components/home/Photo";
import Stats from "@/components/home/Stats";

export default function Home() {
  const navigateTo = () => {
    window.open(personal.cv, "_blank");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="font-semibold flex items-center justify-center xl:justify-start gap-2 text-yellow-400">
              Cloud/DevOps Engineer
            </span>
            <h1 className="h1 mt-2">
              Hello I&apos;m <br />
              <span className="text-accent flex items-center justify-center xl:justify-start gap-2">
                {personal.name}
              </span>
            </h1>
            <p className="mb-9 mt-2 max-w-[500px] text-white/80">
              {personal.summary}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex uppercase"
                onClick={navigateTo}
              >
                <div className="flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </div>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="flex justify-center items-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
