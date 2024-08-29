
import "./globals.css";
import {inter, rubik} from "@/fonts/font";
import SideBar from "@/components/SideBar/SideBar";
import NavBar from "@/components/NavBar/NavBar";
import {cn} from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider"
import AuthProvider from "@/providers/SessionProvider";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {Toaster} from "react-hot-toast";



export const metadata = {
  title: "Social Media Next14",
  description: "Social media website build using nextjs14",
};

export default async function RootLayout({ children }) {

    const session = await getServerSession(authOptions)

    return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
        <AuthProvider session={session}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <div className={"flex h-screen"}>
                    <SideBar />
                    <div className={"flex flex-col w-full"}>
                        <NavBar />
                        <div className={"flex-grow p-4 overflow-y-auto"}>
                            {children}
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </AuthProvider>
        <Toaster position="bottom-right"/>
      </body>
    </html>
  );
}
