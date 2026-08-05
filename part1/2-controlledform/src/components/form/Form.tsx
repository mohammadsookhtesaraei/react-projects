import type { FormProps } from "@/components/form/form.types";
import TextField from "@/components/ui/TextField";

const Form = ({ data, onChangeForm, onSubmitForm }: FormProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <form
        onSubmit={onSubmitForm}
        className="w-full max-w-sm space-y-3.5 rounded-md border border-gray-400/30 p-2"
      >
        <TextField
          type="text"
          label="userName"
          name="userName"
          value={data.userName}
          placeholder="userName"
          onChange={onChangeForm}
        />
        <TextField
          type="email"
          label="email"
          name="email"
          value={data.email}
          placeholder="email"
          onChange={onChangeForm}
        />
        <TextField
          type="text"
          label="phoneNumber"
          name="phoneNumber"
          value={data.phoneNumber}
          placeholder="phoneNumber"
          onChange={onChangeForm}
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
            onChange={onChangeForm}
            className=""
          />
          <TextField
            type="radio"
            id="female"
            label="female"
            name="gender"
            checked={data.gender === "female"}
            value="female"
            onChange={onChangeForm}
            className=""
          />
        </div>
        {/* select */}
        <div>
          <select
            className="w-full rounded border p-1 focus:outline-none"
            name="role"
            value={data.role}
            onChange={onChangeForm}
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
            onChange={onChangeForm}
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-blue-500 px-4 py-1 text-white"
        >
          send
        </button>
      </form>
    </div>
  );
};
export default Form;
