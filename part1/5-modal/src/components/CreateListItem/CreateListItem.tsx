import { useRef } from "react";

import type { ChangeEvent , ReactNode } from "react"

import Modal from "../Modal/Modal";
import TextInput from "../base/TextInput/TextInput";

type CreateListItemProps={
  value:string,
  onChange:(e: ChangeEvent<HTMLInputElement>)=>void
};



 const CreateListItem = ({onChange ,value}:CreateListItemProps):ReactNode => {

  const dialogRef=useRef<HTMLDialogElement | null>(null);

  const handleShowModalButtonClick=():void => {
  dialogRef.current?.showModal();
  }


  return (
   <>
      <button className="bg-blue-400 rounded-md px-4 py-0.5 text-white" onClick={handleShowModalButtonClick}>open</button>
       <Modal ref={dialogRef} heading="create item list">
      <form className="w-full p-2">
       <TextInput label="title" name="title" value={value} onChange={onChange} placeholder="title"/>
      </form>
    </Modal>
   </>
  );
}

export default CreateListItem;
