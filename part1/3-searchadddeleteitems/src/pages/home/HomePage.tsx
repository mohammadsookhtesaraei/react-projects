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


  const handlRemoveItemButtonClick=(id:number)=>{
    const newItem=display.filter((item)=> item.id !== id);
    setDisplay(newItem);
  };
   
    const handlEditItemButtonClick=(id:number,edit:string)=>{
     const items=[...display];

     const newItem=items.map((item)=>{
      if(item.id === id){
        return {...item,username:edit}
      };
      return item

     });


     setDisplay(newItem);

     

  };

  return (
    <div>
     <AddItem user={user} onChaneUser={handleUserChangeInput} onAddItem={handleAddButtonClick}/>
     <ListItems display={display} onRemove={handlRemoveItemButtonClick} onEditItem={handlEditItemButtonClick}/>
    </div>
  )
}
export default HomePage