import Announcements from "@/app/components/Announcements";
import BigCalender from "@/app/components/BigCalender";
import EventCalendar from "@/app/components/EventCalender";
import React from "react";

const Studentpage = () => {
  return (
    <div className="flex gap-4 flex-col  xl:flex-row p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Schedule (42)</h2>
          <BigCalender />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default Studentpage;
