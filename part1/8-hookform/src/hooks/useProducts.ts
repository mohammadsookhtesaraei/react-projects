import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productsService";



export const useProducts=()=>{
    return useQuery({
        queryKey:["get-products"],
        queryFn:getAllProducts,
        retry:false
    })
};

