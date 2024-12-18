import BottomNavigation from "@/components/BottomNavigation";
import HeaderNavigation from "@/components/HeaderNavigation";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="w-full h-screen p-7 bg-[#F9F9F9]">
      <HeaderNavigation />
      <main className="">
        <Outlet />
      </main>
      <footer className="relative">
        <BottomNavigation />
      </footer>
    </div>
  );
}
