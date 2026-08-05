import { useState } from "react"

import TextField from "@/components/ui/TextField";



const Form = () => {
    const [data,setData]=useState({
     userName:"",
     email:"",
     phoneNumber:"",
     gender:"male",
     role:"",
     isCheck:false
    });


    const handlInputChange=(event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
     
        const {type,name,value}=event.target;

        const newValue=type === "checkbox" ? event.target.checked : value;
        setData((prev)=>({...prev,[name]:newValue}))
 
    };

    const handleFormSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();
   console.log(data);

    }


  return (
    <div className="flex items-center justify-center">
    <form onSubmit={handleFormSubmit} className="w-full space-y-3.5 max-w-sm border p-2 border-gray-400/30 rounded-md">
     <TextField type="text" label="userName" name="userName" value={data.userName} placeholder="userName" onChange={handlInputChange}/>
     <TextField type="email" label="email" name="email" value={data.email} placeholder="email" onChange={handlInputChange}/>
     <TextField type="text" label="phoneNumber" name="phoneNumber" value={data.phoneNumber} placeholder="phoneNumber" onChange={handlInputChange}/>
   
    <div className="flex gap-x-4">
      <TextField type="radio" id="male" label="male" name="gender" checked={data.gender === "male"} value="male" onChange={handlInputChange} className=""/>
      <TextField type="radio" id="female" label="female" name="gender" checked={data.gender === "female"} value="female" onChange={handlInputChange} className=""/>
    </div>

    <div>
      
        <select className="w-full border p-1 focus:outline-none  rounded" name="role"  value={data.role} onChange={handlInputChange}>
            <option value="">Select city</option>
            <option value="gorgan">gorgan</option>
            <option value="tehran">tehran</option>
            <option value="sari">sari</option>
        </select>
    </div>

    <div className="flex items-center gap-x-2">
      <h2>please accept terms and condition</h2>
      <input className="" type="checkbox" name="isCheck" checked={data.isCheck} onChange={handlInputChange} />
    </div>

   
       <button type="submit" className="px-4 py-1 rounded-md bg-blue-500 text-white cursor-pointer">
        send
       </button>
    </form>
    </div>
  )
}
export default Form