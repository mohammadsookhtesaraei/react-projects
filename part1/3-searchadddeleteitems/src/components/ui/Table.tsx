import { useState } from "react";

import EditItem from "../ui/EditItem";

import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

import type { DisplayType } from "../../pages/home/HomePage";

type TableProps = {
  display: DisplayType[];
  onRemove: (id: number) => void;
  onEditItem: (id: number, edit: string) => void;
};

const Table = ({ display, onRemove, onEditItem }: TableProps) => {

    // edit state for input and send as props to edititem componet
  const [edit, setEdit] = useState("");

//   hide and show input
  const [isEditing, setIsEditing] = useState(false);

//   change input controlled callback fn send as props to edititem componet
  const handleChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(event.target.value);
  };


//   dynamic edit
  const handle = () => {
    setIsEditing(true);
  };


  return (
    <table className="w-full max-w-md border-collapse overflow-hidden border shadow-md">
      <thead>
        <tr className="bg-blue-500 text-white [&>th]:capitalize">
          <th>number</th>
          <th>userName</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {display.map((item) => (
          <tr
            className="border bg-gray-100 hover:bg-gray-200 [&>td]:p-2 [&>td]:text-center"
            key={item.id}
          >
            <td>{item.id}</td>
            <td>
              {isEditing ? (
                <EditItem edit={edit} onEdit={handleChangeEdit} />
              ) : (
                item.username
              )}
            </td>
            <td>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-x-2">
                    {/* finish edit btn */}
                  <button
                    title="done"
                    className="btn-outline text-green-400"
                    onClick={() => {
                      if (!edit) {
                        return;
                      }
                      onEditItem(item.id, edit);
                      setIsEditing(false);
                    }}
                  >
                    <SiTicktick />
                  </button>

                  {/* edit btn */}
                  <button
                    title="edit"
                    className="btn-outline text-gray-400"
                    onClick={handle}
                  >
                    <MdModeEditOutline />
                  </button>
                </div>

                {/* delete btn */}
                <button
                  title="delete"
                  className="btn-outline"
                  onClick={() => onRemove(item.id)}
                >
                  <MdDelete className="" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
