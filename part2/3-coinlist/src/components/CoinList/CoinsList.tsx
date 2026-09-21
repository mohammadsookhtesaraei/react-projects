import { useEffect, useState, type ReactNode } from "react"
import axios from "axios";

import { getCoins } from "../../services/getCoins";
import { type ICoin } from "../../types/coins-interface";

import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import SearchBox from "./components/SearchBox/SearchBox";


 const CoinsList = ():ReactNode => {

  // coins state
  const [coins,setCoins]=useState<ICoin[]>([]);
// pagination state
  const [page,setPage]=useState(1);
// loading state
  const [isLoading,setIsLoading]=useState(false);
// select option state
  const [currency, setCurrency] = useState("usd");

  // useEffect and fecth data with updating cycle
  useEffect(()=>{
   const getData=async()=>{
   setIsLoading(true);
   try{
   const response=await getCoins(page,currency);
   setCoins(response)
   }catch(error){
   if(axios.isAxiosError(error)){
    console.log(error.response?.data.message);
   }else {
    console.log("unknown error");
   }
   }finally{
    setIsLoading(false)
   }
   };

   getData()
  },[page,currency]);



  return (
    <div className="">
      <SearchBox setPage={setPage} currency={currency} setCurrency={setCurrency}/>
      <Table coins={coins} currency={currency} isLoading={isLoading}/>
      <Pagination page={page} setPage={setPage}/>
    </div>
  );
}

export default CoinsList;
