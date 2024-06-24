import { PropsWithChildren, ReactNode } from "react";
import { PagesHeader } from "../../components/Header";

export default function Layout({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <div className="h-screen w-full flex flex-col relative">
      <PagesHeader />
      <main className="w-full px-10 py-5 max-md:p-5 max-sm:px-3 h-screen bg-background pb-5">
        {children}
      </main>
    </div>
  );
}
