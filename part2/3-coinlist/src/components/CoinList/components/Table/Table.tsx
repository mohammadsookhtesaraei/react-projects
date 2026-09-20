import type { ReactNode } from "react";
import { type ICoin } from "../../../../types/coins-interface";
import TabelHeader from "./components/TabelHeader/TabelHeader";
import TableContent from "./components/TableContent/TableContent";

type TableProps = {
  coins: ICoin[];
  isLoading: boolean;
  currency:string
};


const Table = ({ coins, isLoading,currency }: TableProps): ReactNode => {
  return (
    <>
      <div className="border-spacing-y-3 border border-gray-300 rounded-md mx-auto max-w-lg h-105 text-sm pt-4 overflow-hidden">
       <TabelHeader/>
       <TableContent currency={currency} coins={coins} isLoading={isLoading}/>
      </div>
    </>
  );
};

export default Table;
