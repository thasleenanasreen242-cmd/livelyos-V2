import "./globals.css";
import Sidebar from "@/components/Sidebar";
import LivelyChat from "@/components/LivelyChat";
import { AppProvider } from "./context/AppContext";


export const metadata = {
  title: "LivelyOS",
  description: "Manage your money, meals, and daily life",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body className="bg-slate-950">


        <AppProvider>

          <div className="flex">


            <Sidebar />


            <main className="
              flex-1
              min-h-screen
            ">

              {children}

            </main>


          </div>


          <LivelyChat />


        </AppProvider>


      </body>

    </html>

  );

}