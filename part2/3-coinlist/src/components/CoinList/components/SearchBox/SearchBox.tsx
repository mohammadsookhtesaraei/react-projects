import { useEffect, useState, type ReactNode } from "react";
import Searched from "./components/Serched/Searched";
import { searchCoins } from "../../../../services/searchCoinService";
import axios from "axios";
import type { ICoin } from "../../../../types/coins-interface";
import DataSearch from "./components/DataSearch/DataSearch";

type SearchBoxProps = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBox = ({ currency, setCurrency }: SearchBoxProps): ReactNode => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<ICoin[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const response = await searchCoins(search, controller.signal);
        setData(response.coins);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        if (axios.isAxiosError(error)) {
          console.log(error.response?.data?.message || "we have an error");
        } else {
          console.log("unknown error");
        }
      }
    };

    getData();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="p-4 flex justify-between mb-8 relative">
      <Searched
        search={search}
        setSearch={setSearch}
        currency={currency}
        setCurrency={setCurrency}
      />
      <DataSearch data={data} />
    </div>
  );
};

export default SearchBox;
