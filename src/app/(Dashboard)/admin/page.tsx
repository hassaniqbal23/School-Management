import AttendanceChart from "@/app/components/AttendanceChart";
import CountChat from "@/app/components/CountChat";
import FinanceChart from "@/app/components/FinanceChart";
import UserCards from "@/app/components/UserCards";
import React from "react";

const Adminpage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/* MIDDLE CAHRT */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chat */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChat />
          </div>
          {/* ATTENDANCE CAHT  */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHAT  */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default Adminpage;
