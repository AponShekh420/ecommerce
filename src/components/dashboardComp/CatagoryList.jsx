"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

import { useCallback } from "react";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    email: "kristen.cooper@example.com",
  },
];

export default function CatagoryList() {
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg" }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );

      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit Catagory">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <CiEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete Catagory">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdOutlineDelete />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
