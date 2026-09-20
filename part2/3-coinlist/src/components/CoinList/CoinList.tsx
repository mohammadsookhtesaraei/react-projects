import { useEffect, useState, type ReactNode } from "react"

import { getCoins } from "../../services/getCoins";
import axios from "axios";

 const CoinList = ():ReactNode => {
  const [coins,setCoins]=useState([]);
  const [page,setPage]=useState(1);
  const [isLoading,setIsLoading]=useState(false);
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
    <div className="">Hello from CoinList</div>
  );
}

export default CoinList;
