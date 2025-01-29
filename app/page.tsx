import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left">
            <span className="font-semibold">FullStack Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Ali Hassan</span>
            </h1>
            <p className="mb-9 mt-2 max-w-[500px] text-white/80">
              Self-motivated Full Stack Developer with hands-on experience in
              creating dynamic and responsive web applications. Proficient in
              front-end and back-end technologies
            </p>
            <div>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center uppercase gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
          <div>text</div>
        </div>
      </div>
    </section>
  );
}
