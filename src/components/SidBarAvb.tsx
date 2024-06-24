"use client";
import { ComponentProps, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ActivityIcon,
  BarChartIcon,
  BoxIcon,
  CalculatorIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FileTextIcon,
  FlameIcon,
  HomeIcon,
  LogOut,
  MonitorIcon,
  PackageIcon,
  PauseCircleIcon,
  TargetIcon,
  ThermometerIcon,
  User,
} from "lucide-react";
import { Button } from "./ui/ButtonAvb";
import LOGOAVBHORIZONTAL from "@/assets/horizontal-logo.png";
import {
  NavBar,
  NavBarContent,
  NavBarFooter,
  NavBarHeader,
  NavBarLink,
} from "./ui/NavBarAvb";

export const menuItems = [
  { name: "Página Inicial", href: "/", icon: HomeIcon },
  { name: "Balanço de Massa", href: "/balanco-de-massa", icon: CalculatorIcon },
  { name: "Documentos", href: "/documentos", icon: FileTextIcon },
  { name: "Gestão de Metas", href: "/gestao-de-metas", icon: TargetIcon },
  { name: "Indicadores", href: "/indicadores", icon: BarChartIcon },
  { name: "Materiais / MRP", href: "/materiais-mrp", icon: BoxIcon },
  { name: "Monitoramento", href: "/monitoramento", icon: MonitorIcon },
  { name: "Paradas", href: "/paradas", icon: PauseCircleIcon },
  { name: "Preditivas", href: "/preditivas", icon: ActivityIcon },
  {
    name: "Sincronismo",
    href: "/sincronismo",
    icon: FlameIcon,
    subItems: [
      { name: "Sincronismo LC", href: "/sincronismo-l", icon: PackageIcon },
    ],
  },
  {
    name: "Temperatura Gaiolas",
    href: "/temperatura-gaiolas",
    icon: ThermometerIcon,
    subItems: [
      {
        name: "Subitem 1",
        href: "/balanco-de-massa/subitem1",
        icon: FileTextIcon,
      },
      {
        name: "Subitem 2",
        href: "/balanco-de-massa/subitem2",
        icon: FileTextIcon,
      },
    ],
  },
];

export const SideBarAvb = ({ children, ...props }: ComponentProps<"div">) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sidebar = searchParams.get("aside");

  useEffect(() => {
    const aside = searchParams.get("aside");
    if (!aside) {
      router.replace(`${window.location.pathname}?aside=closed`);
    }
  }, [searchParams, router]);

  const setUrlModal = () => {
    const newAside = sidebar === "closed" ? "open" : "closed";
    const newUrl = `${window.location.pathname}?aside=${newAside}`;
    router.push(newUrl);
  };

  const getLinkWithAside = (href: string): string => {
    const asideParam = sidebar ? `?aside=${sidebar}` : "";
    return `${href}${asideParam}`;
  };

  const isActiveLink = (path: string): boolean => {
    return pathname === path;
  };

  const NavBarItem = ({
    item,
    sidebar,
    getLinkWithAside,
    isActiveLink,
  }: {
    item: any;
    sidebar: string | null;
    getLinkWithAside: (href: string) => string;
    isActiveLink: (path: string) => boolean;
  }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!expanded);
    };

    return (
      <>
        <div className="flex items-center w-full justify-between">
          <NavBarLink
            Icon={item.icon}
            href={getLinkWithAside(item.href)}
            className={`w-full justify-bete ${isActiveLink(item.href) && "bg-avb-green-700/60 text-white"} ${sidebar === "closed" && " justify-center"} `}
          >
            <span className={`ms-3 ${sidebar === "closed" && "hidden"}`}>
              {item.name}
            </span>
          </NavBarLink>
          {item.subItems && (
            <Button
              variant="link"
              onClick={toggleExpand}
              className="text-white mx-0"
            >
              {expanded ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </Button>
          )}
        </div>
        {expanded && item.subItems && (
          <div className="ml-4">
            {item.subItems.map((subItem: any, index: number) => (
              <NavBarItem
                key={index}
                item={subItem}
                sidebar={sidebar}
                getLinkWithAside={getLinkWithAside}
                isActiveLink={isActiveLink}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <main
      className={`flex  w-full md:grid max-sm:hidden ${sidebar === "open" ? "md:grid-cols-[14rem_1fr] transition-all" : "md:grid-cols-[4rem_1fr] transition-all"}`}
    >
      <div className="relative">
        <Button
          size="icon"
          variant="link"
          className={`backdrop-blur-lg bg-avb-green-400/90 rounded-full text-avb-green-100 absolute top-5 -right-3 z-10 size-6 transition-all`}
          onClick={setUrlModal}
        >
          {sidebar === "open" && <ChevronLeft className="size-4" />}
          {sidebar === "closed" && <ChevronRight className="size-4" />}
        </Button>
        <NavBar sidebar={sidebar} setUrlModal={setUrlModal}>
          <NavBarHeader
            sidebar={sidebar}
            urlImage={LOGOAVBHORIZONTAL}
            href={getLinkWithAside("/")}
            headerTitle="SIG AVB"
          />

          <NavBarContent>
            {menuItems.map((item, index) => (
              <NavBarItem
                key={index}
                item={item}
                sidebar={sidebar}
                getLinkWithAside={getLinkWithAside}
                isActiveLink={isActiveLink}
              />
            ))}
          </NavBarContent>

          <NavBarFooter
            className={`${sidebar === "closed" && "justify-center"} `}
          >
            <Button
              className="text-avb-green-100 border border-border/20 rounded-full"
              variant="outline"
              size="icon"
            >
              <User className="size-4" />
            </Button>

            {sidebar === "open" && (
              <Button variant="link" size="icon">
                <LogOut className="size-4 text-zinc-100" />
              </Button>
            )}
          </NavBarFooter>
        </NavBar>
      </div>

      <div className="overflow-y-auto h-screen bg-background">{children}</div>
    </main>
  );
};
