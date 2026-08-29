

import type { ChangeEvent , ReactNode, SubmitEvent,RefObject } from "react"

import Modal from "../Modal/Modal";

import TextInput from "../base/TextInput/TextInput";
import Button from "../base/Button/Button";

type CreateListItemProps={
  value:string,
  error:string | null;
  formRef:RefObject<HTMLFormElement | null>,
  dialogRef:RefObject<HTMLDialogElement | null>
  onChange:(e: ChangeEvent<HTMLInputElement>)=>void,
  onSubmit:(e: SubmitEvent<HTMLFormElement>)=>void,
  onClose:()=>void
};



 const CreateListItem = ({value,onChange ,onSubmit,error,formRef,dialogRef,onClose}:CreateListItemProps):ReactNode => {




  const handleShowModalButtonClick=():void => {
  dialogRef.current?.showModal();
  };

  const handleCancelModal=():void => {
    dialogRef.current?.close();
  }


  return (
   <div className="p-6">
     <Button varinat="primary" onClick={handleShowModalButtonClick}>open</Button>

       <Modal ref={dialogRef} onClose={onClose} heading="create item list">

      <form ref={formRef} onSubmit={onSubmit} className="w-full p-2">
       <TextInput label="title" name="title" value={value} onChange={onChange} placeholder="title"/>
       <span className="text-rose-600">{error || '\u00A0'}</span>
       <div className="my-2 flex gap-x-2">
        <Button varinat="primary" type="submit">submit</Button>
        <Button varinat="outline" type="reset" onClick={handleCancelModal}>cancel</Button>
       </div>
      </form>
    </Modal>
   </div>
  );
}

export default CreateListItem;
