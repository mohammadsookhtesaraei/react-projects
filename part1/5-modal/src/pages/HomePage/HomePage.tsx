import { useState, type ChangeEvent, type ReactNode } from "react";
import CreateListItem from "../../components/CreateListItem/CreateListItem";

const HomePage = (): ReactNode => {
  const [title, setTitle] = useState<string>("");
  const [lists, setList] = useState<{ id: string; title: string }[]>([]);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>):void => {
    const value = e.target.value;
    setTitle(value);
  };

  return (
    <div className="">
      <CreateListItem  value={title} onChange={handleChangeTitle} />
    </div>
  );
};

export default HomePage;
