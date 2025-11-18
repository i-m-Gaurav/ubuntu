import React from "react";
import { BatteryCharging, Volume2, Wifi } from "lucide-react";

const Header = () => {
  const current = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][current.getMonth()];

  return (
    <div className="bg-gray-800 h-7 flex justify-between px-4">
      <div className="flex items-center justify-center px-2 hover:bg-gray-600 hover:rounded-full my-[2px]">
        <div className="w-8 h-2 bg-white rounded-full mr-1"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="flex justify-center items-center px-2 hover:bg-gray-600 hover:rounded-full my-[2px]">
        {month} {current.getDate()} {current.getHours()}:{current.getMinutes()}
      </div>

      <div className="flex justify-center items-center px-2 gap-3 hover:bg-gray-600 hover:rounded-full my-[2px]">
        <div>
          <Wifi size={16} />
        </div>
        <div>
          <Volume2 size={16} />
        </div>
        <div className="rotate-270">
          <BatteryCharging size={16} />
        </div>
      </div>
    </div>
  );
};

export default Header;
