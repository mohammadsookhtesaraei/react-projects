import { useState } from "react"
import AddItem from "../../components/additem/AddItem"
import ListItems from "../../components/listItems/ListItems"
import { useLocalStorage } from "../../hooks/useLocalStorage";


export type DisplayType={
    id:number,
    username:string
};

const HomePage = () => {
  // lift state-user state 

  // state for get information from client and send it as props to additem component
  const [user,setUser]=useState("");

  // show information list and send to as props to listItems component
  const [display,setDisplay]=useLocalStorage<DisplayType[]>("display",[]);
 


// callback fn for  onchange input in additem component send as props
  const handleUserChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const {value}=event.target;
   setUser(value);
  };

  // add item  in display state array for listrendering and send it as props to add item component
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

// remove callback fn for table send as props to listItems then send to table component
  const handlRemoveItemButtonClick=(id:number)=>{
    const newItem=display.filter((item)=> item.id !== id);
    setDisplay(newItem);
  };
   
  // edit callback fn for table send as props to listItems then send to table component
    const handlEditItemButtonClick=(id:number,edit:string)=>{
     const items=[...display];

     const newList=items.map((item)=>{
      if(item.id === id){
        return {...item,username:edit}
      };
      return item

     });
     setDisplay(newList);

  };

  return (
    <div>
     <AddItem user={user} onChaneUser={handleUserChangeInput} onAddItem={handleAddButtonClick}/>
     <ListItems display={display} onRemove={handlRemoveItemButtonClick} onEditItem={handlEditItemButtonClick}/>
    </div>
  )
}
export default HomePage