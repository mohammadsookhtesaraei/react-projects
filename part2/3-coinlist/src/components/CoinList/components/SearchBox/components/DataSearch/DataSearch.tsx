import type { ReactNode } from "react";
import type { ICoin } from "../../../../../../types/coins-interface";

type DataSearchProps = {
  data: ICoin[];
};

const DataSearch = ({ data }: DataSearchProps): ReactNode => {
  return (
    <div
      className={`absolute  w-full max-w-xs bg-amber-50 top-14 ${!data.length ? "hidden" : ""} border rounded-md border-gray-300 p-2 `}
    >
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataSearch;
