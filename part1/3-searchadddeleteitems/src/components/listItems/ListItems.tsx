import { memo, useState } from "react";
import type { DisplayType } from "../../pages/home/HomePage";
import Table from "../ui/Table";


type ListItemsProps = {
  display: DisplayType[];
  onRemove: (id: number) => void;
  onEditItem: (id: number, edit: string) => void;
};

const ListItems = ({ display, onRemove, onEditItem }: ListItemsProps) => {


  if(display.length === 0) {

    return (
      <p className="my-6">empty list</p>
    )
  }

  return (
    <div className="mt-8">
     <Table display={display} onRemove={onRemove} onEditItem={onEditItem}/>
    </div>
  );
};
export default memo(ListItems);
