import  { memo } from "react";
import type { DisplayType } from "../../pages/home/HomePage";


type ListItemsProps={
  display:DisplayType[]
}

const ListItems = ({display}:ListItemsProps) => {
  console.log("list render");
  return (
    <div className="mt-8">
      <table className="border border-collapse overflow-hidden shadow-md w-full max-w-md">
        <thead>
          <tr className="bg-blue-500 text-white [&>th]:capitalize">
            <th>number</th>
            <th>userName</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {display.map((item)=>(
            <tr className="bg-gray-100 hover:bg-gray-200 border [&>td]:text-center [&>td]:p-2" key={item.id}>
             <td>{item.id}</td>
             <td>{item.username}</td>
             <td>
              
             </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default memo(ListItems);