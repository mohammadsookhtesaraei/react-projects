

import { http } from "./http";


export const getAllbooks=()=>{
    return http.get("/books")
};


export const updateBooks=(id,data)=>{
    return http.patch(`/books/${id}`,data)
};


