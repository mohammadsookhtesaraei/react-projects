import { useEffect, useState, type ReactNode } from "react"
import axios from "axios";

import { getCoins } from "../../services/getCoins";
import { type ICoin } from "../../types/coins-interface";

 const CoinsList = ():ReactNode => {

  // coins state
  const [coins,setCoins]=useState<ICoin[]>([]);
// pagination state
  const [page,setPage]=useState(1);
// loading state
  const [isLoading,setIsLoading]=useState(false);
// select option state
  const [currency, setCurrency] = useState("usd");

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

  console.log(coins);

  return (
    <div className="">
      
    </div>
  );
}

export default CoinsList;
