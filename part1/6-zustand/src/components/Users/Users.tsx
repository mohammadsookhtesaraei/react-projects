import { useEffect, type ReactNode } from "react"

import Card from "../ui/Card/Card";

import { useUsersStore } from "../../store/users-store";


const colors=["blue","rose","yellow","green"];

type UsersProps={};

 const Users = ({}:UsersProps):ReactNode => {

  const users=useUsersStore((state)=>state.users);
  const isLoading=useUsersStore((state)=>state.isLoading);
  const isError=useUsersStore((state)=>state.error);
  const fetchUsers=useUsersStore((state)=>state.fetchUsers);


  const state=users?.slice(0,4).map((item,index)=>({
    ...item,
    color:colors[index]
  }));

 



  useEffect(()=>{
  fetchUsers()
  },[fetchUsers])


  if(isLoading){
    return (<p>loading...</p>)
  }

   if(isError){
    return (<p>{isError}</p>)
  }

  return (
    <div className="py-10 px-4 border-b border-b-gray-300/50">

      <div className="flex flex-wrap">
        
        {state?.map((user)=>(
          <Card key={user.id} {...user}/>
        ))}
      
        
      </div>
    </div>
  );
}

export default Users;
