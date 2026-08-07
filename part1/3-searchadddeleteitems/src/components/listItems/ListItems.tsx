import { memo, useState } from "react";
import type { DisplayType } from "../../pages/home/HomePage";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import EditItem from "../ui/EditItem";

type ListItemsProps = {
  display: DisplayType[];
  onRemove: (id: number) => void;
  onEditItem: (id: number, edit: string) => void;
};

const ListItems = ({ display, onRemove, onEditItem }: ListItemsProps) => {
  const [edit, setEdit] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(event.target.value);
  };

  const handle = () => {
    setIsEditing(true);
  };

  return (
    <div className="mt-8">
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
                    <button
                      className="btn-outline text-gray-400"
                      onClick={handle}
                    >
                      <MdModeEditOutline />
                    </button>
                    <button
                      className="btn-outline text-green-400"
                      onClick={() => {
                        onEditItem(item.id, edit);
                        setIsEditing(false);
                      }}
                    >
                      <SiTicktick />
                    </button>
                  </div>
                  <button
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
    </div>
  );
};
export default memo(ListItems);
