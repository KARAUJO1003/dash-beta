import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/CardAvb";
import CARDIMAGE from "@/assets/cardImage.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/ButtonAvb";
import { ThermometerIcon } from "lucide-react";
import BACKGROUND_IMAGE from "@/assets/avbBackground.jpg";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 w-full max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
      <Image
        src={BACKGROUND_IMAGE}
        alt="bg pricipal"
        fill
        className="object-cover  w-full mix-blend-luminosity opacity-15 dark:opacity-5"
      />
      {Array.from({ length: 11 }).map((_, index) => (
        <Card
          key={index}
          className="group w-full relative h-auto aspect-video overflow-hidden  flex items-center justify-center cursor-pointer"
        >
          <Image
            src={CARDIMAGE}
            alt="CARDIMAGE"
            className=" h-full w-full rounded-md"
          />
          <CardFooter className="absolute -bottom-1 transition-all group-hover:bottom-0 h-2/5  pb-0 w-full bg-avb-green-600/60 group-hover:bg-avb-green-600/90 backdrop-blur-md flex justify-between items-start pt-4 px-2 ">
            <CardTitle className="text-xs text-zinc-100 flex gap-1 items-center">
              <ThermometerIcon className="size-4" />
              <span>Temperatura Gaiolas</span>
            </CardTitle>
            <Button
              variant="secondary"
              className="h-6 px-2 items-center text-xs text-zinc-100 rounded-sm bg-blue-500 hover:bg-avb-green-500/50"
            >
              Acessar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
