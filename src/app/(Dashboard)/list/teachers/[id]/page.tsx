import Image from "next/image";
import React from "react";

const TeacherIdPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-Sky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-left justify-between  flex-col flex-wrap gap-4 text-xs font-medium">
                <div className="flex gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>january 2025</span>
                </div>

                <div className="flex gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>

                <div className="flex gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+(92) 3554231410</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 p-4"></div>
        </div>

        {/* BOTTOM */}
        <div>
          {/* Additional content goes here */}
          <p>Bottom Section Content</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3">
        {/* Content for the right side */}
        <p>Right Side Content</p>
      </div>
    </div>
  );
};

export default TeacherIdPage;
