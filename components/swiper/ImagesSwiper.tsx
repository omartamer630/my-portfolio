import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImagesSwiper: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="relative w-full h-[85dvh] max-h-[90dvh]">
      <Carousel className="flex items-center justify-center">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full ">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white" />
      </Carousel>
    </div>
  );
};

export default ImagesSwiper;
