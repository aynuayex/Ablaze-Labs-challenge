import HeaderNavigation from "@/components/HeaderNavigation";
// import { useState } from "react";
import { Outlet } from "react-router";
// import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RECENTIcon from "@/assets/recent.svg";
import NearByIcon from "@/assets/nearBy.svg";
import ProfileIcon from "@/assets/profile.svg";
import HomeIcon from "@/assets/home.svg";

export default function RootLayout() {
//   const [value, setValue] = useState("home");

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };
  return (
    <div className="w-full h-screen p-7 bg-[#F9F9F9]">
      <HeaderNavigation />
      <main className="">
        <Outlet />
      </main>
      <footer className="relative h-[90px] bg-white">
        {/* <BottomNavigation
          sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="HOME"
            value="home"
            // icon={<img width={34} height={27} src={HomeIcon} alt="Home Icon" />}
          />
          <BottomNavigationAction
            label="RECENT"
            value="recent"
            // icon={<img width={34} height={27} src={HomeIcon} alt="Home Icon" />}
            // icon={<RECENTIcon />}
          />
          <BottomNavigationAction
            label="NEARBY"
            value="nearby"
            // icon={<img width={34} height={27} src={HomeIcon} alt="Home Icon" />}
            // icon={<NearByIcon />}
          />
          <BottomNavigationAction
            label="PROFILE"
            value="profile"
            // icon={<img width={34} height={27} src={HomeIcon} alt="Home Icon" />}
            // icon={<ProfileIcon />}
          />
        </BottomNavigation> */}
        <div className="fixed bottom-0 left-0 w-full h-[36px] flex">
          <div className="flex bg-[#1FAE63]">
            <img width={24} height={24} src={HomeIcon} alt="HomeIcon" />
            <p className="font-poppins font-semibold text-[10px] tracking-[0.04rem] text-white uppercase">
              Home
            </p>
          </div>
          <div className="flex bg-[#1FAE63]">
            <img width={24} height={24} src={RECENTIcon} alt="HomeIcon" />
            <p className="font-poppins font-semibold text-[10px] tracking-[0.04rem] text-white uppercase">
            Recent
            </p>
          </div>
          <div className="flex bg-[#1FAE63]">
            <img width={24} height={24} src={NearByIcon} alt="HomeIcon" />
            <p className="font-poppins font-semibold text-[10px] tracking-[0.04rem] text-white uppercase">
            NearBy
            </p>
          </div>
          <div className="flex bg-[#1FAE63]">
            <img width={24} height={24} src={ProfileIcon} alt="HomeIcon" />
            <p className="font-poppins font-semibold text-[10px] tracking-[0.04rem] text-white uppercase">
            Profile
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
