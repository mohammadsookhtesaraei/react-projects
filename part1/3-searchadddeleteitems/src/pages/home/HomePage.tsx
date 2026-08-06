import { useCallback, useState } from "react"
import AddItem from "../../components/additem/AddItem"
import ListItems from "../../components/listItems/ListItems"


export type DisplayType={
    id:number,
    username:string
};

const HomePage = () => {
    console.log("homerender");
  const [user,setUser]=useState("");
  const [display,setDisplay]=useState<DisplayType[]>([])
  console.log(display); 



  const handleUserChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const {value}=event.target;
   setUser(value);
  };

  const handleAddButtonClick=()=>{
        if(!user || !user.trim()){
        return
    };

    setDisplay((prev)=>([...prev,{
        id:prev.length + 1,
        username:user  
    }]));
    setUser("");
  };

  


  return (
    <div>
     <AddItem user={user} onChaneUser={handleUserChangeInput} onAddItem={handleAddButtonClick}/>
     <ListItems display={display}/>
    </div>
  )
}
export default HomePage