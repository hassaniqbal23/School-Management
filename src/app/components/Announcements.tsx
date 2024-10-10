import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Announcements</h2>
        <span className="text-gray-400 text-xs">View All</span>
      </div>
      <div className="flex flex-col mt-4">
        <div className="bg-SkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <p className="bg-white p-1 rounded-md text-gray-400 text-xs">
              2024/5
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            fugiat! Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="bg-PurpleLight rounded-md p-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <p className="bg-white p-1 rounded-md text-gray-400 text-xs">
              2024/5
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            fugiat! Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="bg-YellowLight rounded-md p-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <p className="bg-white p-1 rounded-md text-gray-400 text-xs">
              2024/5
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            fugiat! Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
