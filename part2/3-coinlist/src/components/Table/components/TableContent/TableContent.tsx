import type { ReactNode } from "react"
import type { ICoin } from "../../../../types/coins-interface";

type TableContentProps={
   coins: ICoin[];
    isLoading: boolean;
};

 const TableContent = ({coins,isLoading}:TableContentProps):ReactNode => {
  return (
     <div>
          {!coins.length && isLoading ? (
            <p className="text-white text-center">loading...</p>
          ) : (
            <ul className="divide-y divide-gray-300 ">
              {coins.map((item) => (
                <li
                  className="grid grid-cols-4 justify-items-center p-2 "
                  key={item.id}
                >
                  <p className="flex gap-x-1">
                    <img
                      className="w-5 h-5 object-cover rounded-full block "
                      src={item.image}
                      alt={item.name}
                    />
                    <span className="text-gray-300 ">{item.symbol}</span>
                  </p>
                  <p className="text-gray-300">
                    {item.current_price.toLocaleString()}$
                  </p>
                  <p className="text-gray-300">
                    {item.market_cap.toLocaleString()}$
                  </p>
                  <p
                    className={
                      item.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-rose-500"
                    }
                  >
                    {item.price_change_percentage_24h}%
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
  );
}

export default TableContent;
