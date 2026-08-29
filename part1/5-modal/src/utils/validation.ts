import type { Dispatch } from "react";

  
  type Error=Dispatch<React.SetStateAction<string | null>>
  
  export function validation(title:string,setError:Error):boolean{
    if(title.trim().length === 0){
      setError("title can not be empty!")
      return false
    };

    if(title.length <= 2) {
     setError("Title must be at least two characters");
      return false
    }

    setError(null);
    return true

  };
