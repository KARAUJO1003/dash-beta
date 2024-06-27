"use client";

import { Button } from "@/components/ui/ButtonAvb";
import { ArrowLeft, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Suspense } from "react";

export const PagesHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    return theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="sticky top-0 z-10">
      <div className="min-h-14 flex items-center justify-between px-10 ">
        <Suspense>
          <div className="flex items-center gap-1 text-avb-green-600">
            {pathname !== "/" && (
              <Button variant="link" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="size-4" />
              </Button>
            )}
            <h4 className="capitalize font-bold text-foregroundtext-avb-green-600">
              {pathname.split("/").pop()}
            </h4>
          </div>
        </Suspense>
        <div className="flex items-center gap-3">
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            <SunIcon className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
