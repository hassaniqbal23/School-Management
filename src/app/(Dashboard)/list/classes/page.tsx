"use client";

import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { classesData, role, studentsData, teachersData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Classes {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: number;
}
const columns = [
  {
    header: "Class Name",
    accessor: "classname",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesListPage = () => {
  const renderRow = (item: Classes) => (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight">
      <td className="flelx items-center gap-4 p-4">
        <h3 className="font-semibold">{item.name}</h3>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal type="update" table="class" data={item} />

              <FormModal type="delete" table="class" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4 m-4 bg-white rounded-md mt-0 flex-1">
      {/* TOP  */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">All Classes</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button> */}
            {role === "admin" && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>
      <div>
        {/* TABLE */}
        <Table columns={columns} renderRow={renderRow} data={classesData} />

        {/* PIGINACTIN  */}
        <Pagination />
      </div>
    </div>
  );
};

export default ClassesListPage;
