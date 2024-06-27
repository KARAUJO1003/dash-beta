import { Card, CardFooter, CardTitle } from "@/components/ui/CardAvb";
import Image from "next/image";
import { Button } from "@/components/ui/ButtonAvb";
import BACKGROUND_IMAGE from "@/assets/avbBackground.jpg";
import {
  ActivityIcon,
  BarChartIcon,
  BoxIcon,
  CalculatorIcon,
  FileTextIcon,
  FlameIcon,
  MonitorIcon,
  PackageIcon,
  PauseCircleIcon,
  TargetIcon,
  ThermometerIcon,
  Coins,
} from "lucide-react";
import IMG_lc from "@/assets/lc.png";
import IMG_corridaco from "@/assets/corridaco.png";
import IMG_organo from "@/assets/organo.png";
import IMG_gestaometas from "@/assets/gestaometas.png";
import IMG_monitoramento from "@/assets/monitoramento.png";
import IMG_paradas from "@/assets/paradas.png";
import IMG_laminacao from "@/assets/laminacao.png";
import IMG_preditivas from "@/assets/preditivas.png";
import IMG_materiais from "@/assets/materiais.png";
import IMG_gusa from "@/assets/gusa.jpeg";
import IMG_indicadores from "@/assets/indicadores.jpeg";
import IMG_custos from "@/assets/custos.jpeg";
import IMG_escoria from "@/assets/escoria.jpeg";
import Link from "next/link";

const cardData = [
  {
    name: "Balanço de Massa",
    path: "/balanco-de-massa",
    icon: CalculatorIcon,
    img: IMG_gusa,
  },
  {
    name: "Documentos",
    path: "/documentos",
    icon: FileTextIcon,
    img: IMG_laminacao,
  },
  {
    name: "Gestão de Metas",
    path: "/gestao-de-metas",
    icon: TargetIcon,
    img: IMG_gestaometas,
  },
  {
    name: "Gestão de Custos",
    path: "/gestao-custos",
    icon: Coins,
    img: IMG_custos,
  },
  {
    name: "Indicadores",
    path: "/indicadores",
    icon: BarChartIcon,
    img: IMG_indicadores,
  },
  {
    name: "Materiais / MRP",
    path: "/materiais-mrp",
    icon: BoxIcon,
    img: IMG_materiais,
  },
  {
    name: "Monitoramento",
    path: "/monitoramento",
    icon: MonitorIcon,
    img: IMG_monitoramento,
  },
  {
    name: "Paradas",
    path: "/paradas",
    icon: PauseCircleIcon,
    img: IMG_paradas,
  },
  {
    name: "Organograma",
    path: "/organograma",
    icon: PauseCircleIcon,
    img: IMG_organo,
  },
  {
    name: "Preditivas",
    path: "/preditivas",
    icon: ActivityIcon,
    img: IMG_preditivas,
  },
  {
    name: "Sincronismo LC",
    path: "/sincronismo-l",
    icon: PackageIcon,
    img: IMG_lc,
  },
  {
    name: "Sincronismo",
    path: "/sincronismo",
    icon: FlameIcon,
    img: IMG_corridaco,
  },
  {
    name: "Temperatura Gaiolas",
    path: "/temperatura-gaiolas",
    icon: ThermometerIcon,
    img: IMG_escoria,
  },
];

export default function Home() {
  return (
    <div className="px-10 grid grid-cols-5 gap-4 w-full max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
      <Image
        src={BACKGROUND_IMAGE}
        alt="bg pricipal"
        fill
        className="object-cover  w-full mix-blend-luminosity opacity-35 dark:opacity-15"
      />
      {cardData.map((item, index) => (
        <Card
          key={index}
          className="group w-full relative h-auto aspect-video overflow-hidden  flex items-center justify-center cursor-pointer"
        >
          <Image
            src={item.img}
            alt={`Imagem card ${item.name}`}
            className=" h-full w-full rounded-md"
          />
          <CardFooter className="absolute -bottom-1 transition-all group-hover:bottom-0 h-2/5  pb-0 w-full bg-avb-green-600/60 group-hover:bg-avb-green-600/90 backdrop-blur-md flex justify-between items-start pt-4 px-2 ">
            <CardTitle className="text-xs text-zinc-100 flex gap-1 items-center">
              <item.icon className="size-4" />
              <span>{item.name}</span>
            </CardTitle>
            <Link href={item.path}>
              <Button
                variant="secondary"
                className="h-6 px-2 items-center text-xs text-zinc-100 rounded-sm bg-blue-500 hover:bg-avb-green-500/50"
              >
                Acessar
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
