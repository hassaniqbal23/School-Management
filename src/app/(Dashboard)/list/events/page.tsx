"use client";

import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { eventsData, role } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Event {
  id: number;
  title: string;
  class: string;
  startTime: string;
  date: string;
  endTime: string;
}
const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },

  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Start Time",
    accessor: "starttime",
    className: "hidden md:table-cell",
  },

  {
    header: "End Time",
    accessor: "endtime",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const EventsListPage = () => {
  const renderRow = (item: Event) => (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight">
      <td className="flelx items-center gap-4 p-4">
        <h3 className="font-semibold">{item.title}</h3>
      </td>
      <td className="">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`list/Students/${item.id}`}>
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-Sky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>

          {role === "admin" && (
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-Purple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4 m-4 bg-white rounded-md mt-0 flex-1">
      {/* TOP  */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">All Events</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* TABLE */}
        <Table columns={columns} renderRow={renderRow} data={eventsData} />

        {/* PIGINACTIN  */}
        <Pagination />
      </div>
    </div>
  );
};

export default EventsListPage;
