import opacitedLogo from "@/assets/opacitedLogo.svg";
import Deposit from "@/assets/Deposit.svg";
import WithDraw from "@/assets/WithDraw.svg";
import Send from "@/assets/Send.svg";
import Receive from "@/assets/Receive.svg";
import Ethiopian_Airlines from "@/assets/Ethiopian_Airlines-Logo 1.svg";
import Yegna_Bus from "@/assets/Yegna Bus 1.svg";
import ELPA from "@/assets/ELPA.svg";
import Wuha_Limat from "@/assets/Wuha Limat.svg";
import EthioTelecom from "@/assets/EthioTelecom.svg";
import SafariCom from "@/assets/SafariCom.svg";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[247px] rounded-[15px] bg-[#1FAE63] mt-4 relative">
        <p className="absolute font-poppins font-semibold text-base left-[25px] top-[95px] text-white">
          Balance
        </p>
        <p className="absolute font-poppins font-semibold text-2xl leading-[48px] left-[25px] top-[119px] text-white">
          12,000,34.00 ETB
        </p>
        <p className="absolute font-poppins font-semibold text-base left-[200px] top-[213px] text-white">
          20%
        </p>
        <img
          src={opacitedLogo}
          alt=""
          className="absolute top-0 left-0 h-full"
        />
      </div>
      <p className="font-poppins font-semibold text-sm leading-[21px] tracking-[0.04rem] mt-[16px]  text-[#2B4B3C]">
        Quick Actions
      </p>
      <div className="grid grid-cols-4 gap-2 justify-between mt-2">
        <div className="flex flex-col justify-center p-2 items-center w-full rounded-[10px] border border-[#D7FFEA] bg-white">
          <img src={Deposit} alt="Deposit icon" />
          <p className="font-poppins font-semibold pt-[11px] text-xs leading-[18px] text-[#2B4B3C]">
            DEPOSIT
          </p>
        </div>
        <div className="flex flex-col justify-center p-2 items-center w-full rounded-[10px] border border-[#D7FFEA] bg-white">
          <img src={WithDraw} alt="WithDraw icon" />
          <p className="font-poppins font-semibold pt-2 text-xs leading-[18px] text-[#2B4B3C]">
            WITHDRAW
          </p>
        </div>
        <div className="flex flex-col justify-center p-2 items-center w-full rounded-[10px] border border-[#D7FFEA] bg-white">
          <img src={Send} alt="Send icon" />
          <p className="font-poppins font-semibold pt-2 text-xs leading-[18px] text-[#2B4B3C]">
            SEND
          </p>
        </div>
        <div className="flex flex-col justify-center p-2 items-center w-full rounded-[10px] border border-[#D7FFEA] bg-white">
          <img src={Receive} alt="Receive icon" />
          <p className="font-poppins font-semibold pt-[11px] text-xs leading-[18px] text-[#2B4B3C]">
            RECEIVE
          </p>
        </div>
      </div>
      <p className="font-poppins font-semibold text-sm leading-[21px] tracking-[0.04rem] mt-[21px] text-[#2B4B3C] uppercase">
        pay with <span className="text-[#1FAE63]">Payet</span>
      </p>
      <p className="font-poppins font-semibold text-[10px] leading-[15px] tracking-[0.04rem] mt-[8px] text-[#94A3B8] uppercase">
        Transportation
      </p>
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] border-[0.5px] border-[#D7FFEA] h-[59px]">
          <img
            width={34}
            height={27}
            src={Ethiopian_Airlines}
            alt="Ethiopian Airlines"
          />
          <p className="font-poppins font-semibold text-[10px] tracking-[0.04rem] text-[#2B4B3C]">
            Ethiopian Airlines
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] border-[0.5px] border-[#D7FFEA] h-[59px]">
          <img width={34} height={27} src={Yegna_Bus} alt="Yegna Bus" />
          <p className="font-poppins font-semibold text-[10px]/[15px] tracking-[0.04rem] text-[#2B4B3C]">
            Yegna Bus Ticket
          </p>
        </div>
      </div>
      <p className="font-poppins font-semibold text-[10px] leading-[15px] tracking-[0.04rem] mt-[8px] text-[#94A3B8] uppercase">
        Utility
      </p>
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] border-[0.5px] border-[#D7FFEA] h-[59px]">
          <img width={34} height={27} src={ELPA} alt="ELPA" />
          <p className="font-poppins font-semibold text-[10px] tracking-[0.04rem] text-[#2B4B3C]">
            ELPA
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] border-[0.5px] border-[#D7FFEA] h-[59px]">
          <img width={34} height={27} src={Wuha_Limat} alt="Wuha_Limat" />
          <p className="font-poppins font-semibold text-[10px]/[15px] tracking-[0.04rem] text-[#2B4B3C]">
            Wuha Limat
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] border-[0.5px] border-[#D7FFEA] h-[59px]">
          <img width={34} height={27} src={EthioTelecom} alt="Wuha_Limat" />
          <p className="font-poppins font-semibold text-[10px]/[15px] tracking-[0.04rem] text-[#2B4B3C]">
            EthioTelecom Com ...
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 bg-white rounded-[5px] border-[0.5px] border-[#D7FFEA] h-[59px]">
          <img width={34} height={27} src={SafariCom} alt="Wuha_Limat" />
          <p className="font-poppins font-semibold text-[10px]/[15px] tracking-[0.04rem] text-[#2B4B3C]">
            Safaricom Commu ...
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
