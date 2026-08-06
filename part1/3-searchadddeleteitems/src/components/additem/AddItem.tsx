
type AddItemProps={
    user:string,
    onChaneUser:(event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddItem:() => void
}

const AddItem = ({user,onChaneUser,onAddItem}:AddItemProps) => {
  console.log("add item render");
    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        onChaneUser(event)
    };
  
  return (
    <div className="flex gap-x-2">
        <input className="input" type="text" value={user} onChange={changeHandler} />
        <button onClick={onAddItem} className="btn">add</button>
    </div>
  )
}
export default AddItem