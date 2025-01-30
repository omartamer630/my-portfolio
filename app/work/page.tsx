"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/work";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useState } from "react";
import SliderButtons from "@/components/swiper/SliderButtons";
const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setActiveProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="flex flex-col xl:justify-between order-2 xl:order-none w-full xl:w-[50%] xl:h-[460px] ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                0
                {projects.findIndex(
                  (project) => project.id === activeProject.id
                ) + 1}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {activeProject.title}
              </h2>
              <p className="text-white/60">{activeProject.description}</p>
              {activeProject.status !== "completed" && (
                <p className="text-accent/80  font-bold capitalize text-xl">
                  {activeProject.status}
                </p>
              )}
              <ul className="flex gap-4 flex-wrap">
                {activeProject.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index !== activeProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                {activeProject.live && (
                  <Link href={activeProject.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {activeProject.github && (
                  <Link href={activeProject.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((prject, index) => (
                <SwiperSlide key={index} className="w-full ">
                  <div className="h-[460px] relative group flex justify-center items-center ">
                    <div className="relative w-full h-full">
                      <Image
                        src={prject.mainImage}
                        alt="project"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons
                continerStyle="flex w-max justify-none gap-2 absolute right-0 bottom-0 z-20 w-full "
                btnStyle="flex justify-center items-center transition-all bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-sm"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
