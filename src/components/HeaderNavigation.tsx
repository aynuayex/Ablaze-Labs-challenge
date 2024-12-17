import { Link } from "react-router";
import qr from "@/assets/qr_code.svg";
import coolicon from "@/assets/coolicon.svg";

const NavigationHeader = () => {
  return (
    <div>
      <header className=" flex justify-between">
        <Link
          to="/qr"
          className="flex justify-center items-center rounded-[10px] border border-[#D7FFEA] bg-white w-[42px] h-[42px]"
        >
          <img
            src={qr}
            alt="qr code svg icon"
            className="bg-white w-[24px] h-[24px]"
          />
        </Link>
        <Link
          to="/notifications"
          className="flex justify-center items-center rounded-[10px] border border-[#D7FFEA] bg-white w-[42px] h-[42px]"
        >
          <img src={coolicon} alt="notification svg icon" />
        </Link>
      </header>
    </div>
  );
};

export default NavigationHeader;
