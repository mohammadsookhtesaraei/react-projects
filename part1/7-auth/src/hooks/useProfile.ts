import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user";




export const useProfile=()=>{
    const {data,isPending,isError,refetch}=useQuery({
        queryKey:["get-profile"],
        queryFn:getUser,
    });

    return {data,isPending,isError,refetch}
}