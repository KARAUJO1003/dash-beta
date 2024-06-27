import "@/app/globals.css";
import { SideBarAvb } from "@/components/SidBarAvb";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HamburguerMenu } from "@/components/ui/HamburguerMenuAvb";
import { AuthProvider } from '@/contexts/AuthContext';
import { cn } from "@/lib/utils";
import UseQueryProviders from '@/providers/queryClientProvider';
import { AbilityProvider } from '@/providers/useAbilityProvider';
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Suspense } from "react";
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "SIG AVB",
    description: "Dashboard AVB.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let auth = true;
    return (
        <html lang="pt-br">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <UseQueryProviders>
                    <AuthProvider>
                        <AbilityProvider>
                            <ThemeProvider
                                attribute="class"
                                defaultTheme="system"
                                enableSystem
                                disableTransitionOnChange
                            >
                                <Suspense fallback={<div>Loading...</div>}>
                                    {auth && <SideBarAvb children={children} />}
                                </Suspense>
                                <HamburguerMenu />
                                {!auth && children}
                            </ThemeProvider>
                        </AbilityProvider>
                    </AuthProvider>
                </UseQueryProviders>
            </body>
        </html>
    );
}
