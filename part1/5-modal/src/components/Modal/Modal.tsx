import type { ComponentProps, MouseEvent, ReactNode, RefObject } from "react";

type ModalProps = ComponentProps<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};

const Modal = ({
  children,
  heading,
  ref,
  ...otherProps
}: ModalProps): ReactNode => {

  
  const handleCloseModalButtonClick = (): void => {
    ref?.current?.close();
  };

  const handleClickwithOutModal = (e: MouseEvent<HTMLDialogElement>): void => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
      ref?.current?.close();
    }
  };

  return (
    <dialog
      onClick={handleClickwithOutModal}
      ref={ref}
      {...otherProps}
      className="max-w-120 w-full rounded-md m-auto backdrop:bg-black/50 backdrop-blur-lg"
    >
      <div className="p-2 flex items-center justify-between border-b border-b-gray-400/50">
        <h2>{heading}</h2>
        <button
          className="size-6 rounded-md text-white cursor-pointer bg-blue-400"
          onClick={handleCloseModalButtonClick}
        >
          X
        </button>
      </div>
      <div>{children}</div>
    </dialog>
  );
};

export default Modal;
