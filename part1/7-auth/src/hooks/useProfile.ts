import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user";




export const useProfile=()=>{
    const {data,isPending,isError,refetch}=useQuery({
        queryKey:["get-profile"],
        queryFn:getUser,
        // ری اکت کویری در صورت شکست ریکویست میاد سه بار اون رو تکرار میکنه ما اینجا
    // این رو فالس گذاشتیم تا فقط یک درخواست بره که کاربر اگر اکسس توکن و رفرش توکن نداشت دیگه درخواست نره
        retry: false,
    });

    return {data,isPending,isError,refetch}
}