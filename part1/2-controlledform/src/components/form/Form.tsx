import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@/components/ui/TextField";
import Contacts from "@/components/displayformlist/Contacts";
import {type ContactType } from "@/components/displayformlist/contacts.types";
const Form = () => {
  // state form
  const [data, setData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    gender: "male",
    role: "",
    isCheck: false,
  });

  // display state for map
  const [contact, setContact] = useState<ContactType[]>([]);

  //  handler-change
  const handlInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { type, name, value } = event.target;
    const newValue = type === "checkbox" ? event.target.checked : value;
    setData((prev) => ({ ...prev, [name]: newValue }));
  };

  // form submit
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContact = { ...data, id: uuidv4() };

    setContact((prev) => [...prev, newContact]);

    setData({
      userName: "",
      email: "",
      phoneNumber: "",
      gender: "male",
      role: "",
      isCheck: false,
    });
  };

  const handleRemoveItem=(id:string)=>{
    const newContact=contact.filter((item)=>item.id !== id);
    setContact(newContact);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-sm space-y-3.5 rounded-md border border-gray-400/30 p-2"
      >
        <TextField
          type="text"
          label="userName"
          name="userName"
          value={data.userName}
          placeholder="userName"
          onChange={handlInputChange}
        />
        <TextField
          type="email"
          label="email"
          name="email"
          value={data.email}
          placeholder="email"
          onChange={handlInputChange}
        />
        <TextField
          type="text"
          label="phoneNumber"
          name="phoneNumber"
          value={data.phoneNumber}
          placeholder="phoneNumber"
          onChange={handlInputChange}
        />
        {/* radio */}
        <div className="flex gap-x-4">
          <TextField
            type="radio"
            id="male"
            label="male"
            name="gender"
            checked={data.gender === "male"}
            value="male"
            onChange={handlInputChange}
            className=""
          />
          <TextField
            type="radio"
            id="female"
            label="female"
            name="gender"
            checked={data.gender === "female"}
            value="female"
            onChange={handlInputChange}
            className=""
          />
        </div>
        {/* select */}
        <div>
          <select
            className="w-full rounded border p-1 focus:outline-none"
            name="role"
            value={data.role}
            onChange={handlInputChange}
          >
            <option value="">Select city</option>
            <option value="gorgan">gorgan</option>
            <option value="tehran">tehran</option>
            <option value="sari">sari</option>
          </select>
        </div>
        {/* checkbox */}
        <div className="flex items-center gap-x-2">
          <h2>please accept terms and condition</h2>
          <input
            className=""
            type="checkbox"
            name="isCheck"
            checked={data.isCheck}
            onChange={handlInputChange}
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-blue-500 px-4 py-1 text-white"
        >
          send
        </button>
      </form>
      {contact.length === 0 ? (<p>empty contactList</p>):(
        <Contacts contact={contact} onRemove={handleRemoveItem}/>
      )}
    </div>
  );
};
export default Form;
