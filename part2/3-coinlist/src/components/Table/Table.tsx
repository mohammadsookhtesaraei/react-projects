import type { ReactNode } from "react";
import { type ICoin } from "../../types/coins-interface";
import TabelHeader from "./components/TabelHeader/TabelHeader";
import TableContent from "./components/TableContent/TableContent";

type TableProps = {
  coins: ICoin[];
  isLoading: boolean;
};


const Table = ({ coins, isLoading }: TableProps): ReactNode => {
  return (
    <>
      <div className="border-spacing-y-3 border border-gray-300 rounded-md w-full max-w-lg  text-sm pt-4">
       <TabelHeader/>
       <TableContent coins={coins} isLoading={isLoading}/>
      </div>
    </>
  );
};

export default Table;
