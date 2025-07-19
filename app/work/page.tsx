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
import { BsArrowUpRight, BsGithub, BsImages } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import SliderButtons from "@/components/swiper/SliderButtons";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImagesSwiper from "@/components/swiper/ImagesSwiper";
import { DialogTitle } from "@radix-ui/react-dialog";

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
              <h4 className="text-[32px] font-semibold">
                Role:{" "}
                <b className="text-accent/95">
                  {activeProject.category} Developer
                </b>
              </h4>
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

          {/* Right image side */}
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative group">
                        <div
                          className="h-[460px] relative flex justify-center items-center cursor-pointer"
                          onClick={() => setActiveProject(project)}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              loading="lazy"
                              src={project.mainImage}
                              alt="project"
                              fill
                              className="object-contain"
                            />
                          </div>

                          {/* album indicator (smaller, always visible) */}
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-full">
                            <BsImages className="text-white" />
                            <span className="text-white text-sm">
                              {project.album.length} images
                            </span>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg- border-0 max-w-[90vw] max-h-[90vh]">
                      <DialogTitle className="text-accent font-semibold text-xl mb-4 absolute top-[-10px] left-5  "></DialogTitle>
                      <ImagesSwiper
                        images={project.album}
                        title={`${activeProject.title} - Gallery`}
                      />
                    </DialogContent>
                  </Dialog>
                </SwiperSlide>
              ))}

              <SliderButtons
                continerStyle="flex w-max justify-none gap-2 absolute right-0 bottom-0 z-20 w-full"
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
