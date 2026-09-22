import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authServices";



export const useProfile=()=>{
    return useQuery({
        queryKey:["get-user"],
        queryFn:getUser,
        retry:false
    })
};

