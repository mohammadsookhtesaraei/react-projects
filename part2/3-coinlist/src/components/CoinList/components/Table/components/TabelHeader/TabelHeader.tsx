import type { ReactNode } from "react"


const theadData = ["Symbol", "Price", "Vol", "24h"];

 const TabelHeader = ():ReactNode => {
  return (
     <div className="border-b border-b-gray-300 pb-1">
          <ul className="grid grid-cols-4 text-white text-lg justify-items-center">
            {theadData.map((item, index) => (
              <li className="" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
  );
}

export default TabelHeader;
