import { create } from "zustand";
import { getUsers } from "../service/usersService";



type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address
    phone: string;
    website: string;
    company: Company
     color: string;
};


type UsersStore= {
    isLoading:boolean,
    error:string | null,
    users:User[] | null,
    fetchUsers:()=>Promise<void>
};


export const useUsersStore=create<UsersStore>((set)=>({
    isLoading:false,
    error:null,
    users:null,

    fetchUsers:async()=>{
     set({
        isLoading:true,
        error:null
     });

     try{
      const data=await getUsers();

     set({
        users:data,
        isLoading:false,
     })
     }catch(error){
      set({
        isLoading:false,
        error:error instanceof Error ?
        error.message
        :"Unknown error"
      })
     }
    }
}));


