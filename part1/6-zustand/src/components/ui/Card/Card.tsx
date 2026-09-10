import type { ReactNode } from "react"
import type { User } from "../../../store/users-store";
import clsx from "clsx";

type CardProps=User & {};

 const Card = ({name,email,company,color}:CardProps):ReactNode => {
  return (
      <div className="p-1 w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12">
          <div className="card">
            <div className={clsx("text-center text-white pb-2",color)}>{name}</div>
            <div className="p-2 space-y-2">
             <p className="text-gray-600 capitalize">email : <span className="text-gray-400">{email}</span></p>
             <p className="text-gray-600 capitalize">company : <span className="text-gray-400">{company.name}</span></p>
            </div>
          </div>
        </div>
  );
}

export default Card;
