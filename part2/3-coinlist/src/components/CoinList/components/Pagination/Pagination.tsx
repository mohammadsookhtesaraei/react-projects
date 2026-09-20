import type { ReactNode } from "react"

type PaginationProps={
  page:number,
  setPage:React.Dispatch<React.SetStateAction<number>>
};

 const Pagination = ({page,setPage}:PaginationProps):ReactNode => {

  const handleNextButtonClick=():void=>{
     setPage(prev => prev < 10 ? prev + 1 : prev);

  }


    const handleBackButtonClick=():void=>{
        setPage(prev => prev > 1 ? prev - 1 : prev);

  }
  return (
    <div className="   my-2 max-w-md mx-auto  grid grid-cols-3 justify-items-center p-4 border border-gray-300 rounded-md">
      <button disabled={page === 1}  className="bg-blue-400 text-white rounded-md px-4 py-0.5 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed" onClick={handleBackButtonClick}>previous</button>
      <span className="mx-6 bg-white size-8 rounded grid place-content-center ">{page}</span>
      <button disabled={page === 10} className="bg-blue-400 text-white rounded-md px-4 py-0.5 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed" onClick={handleNextButtonClick}>next</button>
    </div>
  );
}

export default Pagination;
