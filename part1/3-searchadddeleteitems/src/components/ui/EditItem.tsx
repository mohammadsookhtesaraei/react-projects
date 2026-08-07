type EditItemProps = {
  edit: string;
  onEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EditItem = ({ edit, onEdit }: EditItemProps) => {
  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEdit(event);
  };
  return (
    <div className="text-center">
      <input  className=" border-none focus:outline-none bg-white w-10" type="text" value={edit} onChange={handleEditChange} />
    </div>
  );
};
export default EditItem;
