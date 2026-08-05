import type { ContactType } from "@/components/displayformlist/contacts.types";

type ContactsProps = {
  contact: ContactType[];
  onRemove: (id: string) => void;
};

const Contacts = ({ contact, onRemove }: ContactsProps) => {
  return (
    <div className="w-full">
      <table className="w-full border-collapse overflow-hidden rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {contact.map((item) => (
            <tr
              key={item.id}
              className="border-b transition-colors hover:bg-gray-100"
            >
              <td className="px-4 py-3">{item.userName}</td>
              <td className="px-4 py-3">{item.email}</td>
              <td className="px-4 py-3">{item.phoneNumber}</td>
              <td className="px-4 py-3">{item.role}</td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onRemove(item.id)}
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Contacts;
