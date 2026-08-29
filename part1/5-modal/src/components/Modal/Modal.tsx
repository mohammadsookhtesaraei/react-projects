import type {  ComponentProps, ReactNode } from "react";

type ModalProps = ComponentProps<"dialog"> & {
  heading: string;
};

const Modal = ({ children, heading }: ModalProps): ReactNode => {
  return (
    <dialog>
      <div>
        <h2>{heading}</h2>
      </div>
      <div>{children}</div>l
    </dialog>
  );
};

export default Modal;
