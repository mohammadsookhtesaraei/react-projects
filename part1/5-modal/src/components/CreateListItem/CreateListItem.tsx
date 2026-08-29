import { useRef } from "react";

import type { ChangeEvent , ReactNode } from "react"

import Modal from "../Modal/Modal";

import TextInput from "../base/TextInput/TextInput";
import Button from "../base/Button/Button";

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
     <Button varinat="primary" onClick={handleShowModalButtonClick}>open</Button>
       <Modal ref={dialogRef} heading="create item list">
      <form className="w-full p-2">
       <TextInput label="title" name="title" value={value} onChange={onChange} placeholder="title"/>
       <div className="my-2 flex gap-x-2">
        <Button varinat="primary" type="submit">submit</Button>
        <Button varinat="outline" type="reset">cancel</Button>
       </div>
      </form>
    </Modal>
   </>
  );
}

export default CreateListItem;
