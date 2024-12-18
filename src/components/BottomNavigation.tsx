import { NavLink } from "react-router";

const BottomNavigation = () => {
  const routes = [
    {
      to: `/`,
      icon: (isActive: boolean) => (
        <svg
          width="18"
          height="18"
          className={isActive ? "fill-white" : "fill-[#202020]"}
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.3 17.2277H2.7C2.20294 17.2277 1.8 16.8247 1.8 16.3277V9.12766H0L8.3628 0.763958C8.53161 0.594959 8.76068 0.5 8.99955 0.5C9.23842 0.5 9.46749 0.594959 9.6363 0.763958L18 9.12766H16.2V16.3277C16.2 16.8247 15.7971 17.2277 15.3 17.2277ZM7.2 10.9277H10.8V15.4277H14.4V8.07286L9 2.67286L3.6 8.07286V15.4277H7.2V10.9277Z" />
        </svg>
      ),
      label: "Home",
    },
    {
      to: `/recent`,
      icon: (isActive: boolean) => (
        <svg
          width="18"
          height="15"
          className={isActive ? "fill-white" : "fill-[#202020]"}
          viewBox="0 0 18 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 0.5H18V2.5H5V0.5ZM0 0H3V3H0V0ZM0 6H3V9H0V6ZM0 12H3V15H0V12ZM5 6.5H18V8.5H5V6.5ZM5 12.5H18V14.5H5V12.5Z" />
        </svg>
      ),
      label: "Recent",
    },
    {
      to: `/nearBy`,
      icon: (isActive: boolean) => (
        <svg
          width="16"
          height="22"
          className={isActive ? "fill-white" : "fill-[#202020]"}
          viewBox="0 0 16 22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.99996 21.0719C6.55646 19.8406 5.21847 18.4907 3.99998 17.0364C2.17142 14.8525 1.00989e-06 11.5999 1.00989e-06 8.50049C-0.00161974 5.26342 1.9477 2.3444 4.93834 1.10555C7.92898 -0.133289 11.3714 0.552234 13.6594 2.84223C15.1639 4.34006 16.0067 6.37752 16 8.50049C16 11.5999 13.8285 14.8525 11.9999 17.0364C10.7814 18.4907 9.44346 19.8406 7.99996 21.0719ZM7.99996 2.78623C4.84563 2.79001 2.28948 5.34616 2.2857 8.50049C2.2857 9.83305 2.88799 12.1405 5.75426 15.5702C6.4607 16.4137 7.21027 17.2201 7.99996 17.9862C8.78972 17.221 9.53966 16.4157 10.2468 15.5736C13.1119 12.1393 13.7142 9.83191 13.7142 8.50049C13.7104 5.34616 11.1543 2.79001 7.99996 2.78623ZM7.99996 11.929C6.10642 11.929 4.57141 10.394 4.57141 8.50049C4.57141 6.60695 6.10642 5.07194 7.99996 5.07194C9.8935 5.07194 11.4285 6.60695 11.4285 8.50049C11.4285 9.4098 11.0673 10.2819 10.4243 10.9248C9.78134 11.5678 8.90927 11.929 7.99996 11.929Z" />
        </svg>
      ),
      label: "NearBy",
    },
    {
      to: `/profile`,
      icon: (isActive: boolean) => (
        <svg
          width="16"
          height="20"
          className={isActive ? "fill-white" : "fill-[#202020]"}
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5.5C3 2.73858 5.23858 0.5 8 0.5C10.7614 0.5 13 2.73858 13 5.5C13 8.26142 10.7614 10.5 8 10.5C5.23858 10.5 3 8.26142 3 5.5ZM8 8.5C9.65685 8.5 11 7.15685 11 5.5C11 3.84315 9.65685 2.5 8 2.5C6.34315 2.5 5 3.84315 5 5.5C5 7.15685 6.34315 8.5 8 8.5Z" />
          <path d="M2.34315 13.8431C0.842855 15.3434 0 17.3783 0 19.5H2C2 17.9087 2.63214 16.3826 3.75736 15.2574C4.88258 14.1321 6.4087 13.5 8 13.5C9.5913 13.5 11.1174 14.1321 12.2426 15.2574C13.3679 16.3826 14 17.9087 14 19.5H16C16 17.3783 15.1571 15.3434 13.6569 13.8431C12.1566 12.3429 10.1217 11.5 8 11.5C5.87827 11.5 3.84344 12.3429 2.34315 13.8431Z" />
        </svg>
      ),
      label: "Profile",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full h-[90px] bg-white flex flex-col justify-around items-center border border-red-700">
      <nav className="w-full h-[36px] grid grid-cols-4 gap-2 px-2">
        {routes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            className={({ isActive }) =>
              `flex justify-center items-center rounded-[5px] ${
                isActive && "bg-[#1FAE63]"
              }`
            }
          >
            {({ isActive }) => {
              return (
                <>
                  {route.icon(isActive)}
                  {isActive && (
                    <p className="font-poppins font-semibold text-[12px]/[18px] text-white uppercase pl-0.5">
                      {route.label}
                    </p>
                  )}
                </>
              );
            }}
          </NavLink>
        ))}
      </nav>
      <div className="w-[134px] h-[5px] rounded-[100px] bg-[#202020]" />
    </div>
  );
};

export default BottomNavigation;
