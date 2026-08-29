import type { ChangeEvent, ComponentProps, ReactNode } from "react"

import Modal from "../Modal/Modal";

type CreateListItemProps=Omit<ComponentProps<typeof Modal | "input">,"children" | "heading"> & {
  value:string,
  onChange:(e:ChangeEvent<HTMLInputElement>) => void;
}

 const CreateListItem = ({onChange ,value,...otherProps}:CreateListItemProps):ReactNode => {
  return (
    <Modal heading="title">
      <form>

      </form>
    </Modal>
  );
}

export default CreateListItem;
