import { useEffect, useState } from "react";

import Form from "@/components/form/Form";

import Contacts from "@/components/displayformlist/Contacts";

import type { ContactType } from "@/components/displayformlist/contacts.types";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
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
  const [contact, setContact] = useState<ContactType[]>(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

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

//   removeItem
  const handleRemoveItem = (id: string) => {
    const newContact = contact.filter((item) => item.id !== id);
    setContact(newContact);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  return (
    <div>
      <Form
        data={data}
        onSubmitForm={handleFormSubmit}
        onChangeForm={handlInputChange}
      />
      {contact.length === 0 ? (
        <p>empty contactList</p>
      ) : (
        <Contacts contact={contact} onRemove={handleRemoveItem} />
      )}
    </div>
  );
};
export default Home;
