import type { ReactNode } from "react";

type SerchedProps = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Searched = ({
  search,
  setSearch,
  currency,
  setCurrency,
  setPage,
}: SerchedProps): ReactNode => {
  const handleChangeCurrency = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCurrency(e.target.value);
    setPage(1);
  };
  return (
    <>
      <input
        className="border text-white px-2 text-blue border-gray-300
        w-full max-w-xs
       py-1
      rounded
     transition-shadiw duration-300
     focus:inset-shadow-sm
     focus:inset-shadow-gray-300
    focus:outline-2
    focus:outline-blue-400
    focus:outline-offset-2"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={currency}
        onChange={handleChangeCurrency}
        className="
    appearance-none
    w-28
    px-3 py-2
    bg-white
    border border-gray-200
    rounded-lg
    text-sm font-medium text-gray-700
    shadow-sm
    cursor-pointer
    transition-all duration-200
   focus:outline-none
   ms-8
   
  "
      >
        <option value="usd">USD ($)</option>
        <option value="eur">EUR (€)</option>
        <option value="cny">CNY (¥)</option>
        <option value="jpy">JPY (¥)</option>
      </select>
    </>
  );
};

export default Searched;
