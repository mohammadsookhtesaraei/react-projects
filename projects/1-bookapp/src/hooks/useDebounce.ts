import { useRef,useEffect, useCallback, useState } from "react";



export const useDebounceFn=(delay:number)=>{

    const timer=useRef<ReturnType<typeof setTimeout>|null>(null);


    const debounce=useCallback((callback:(...args:any[])=>void)=>{
      
        return (...args:any[])=>{
        clearTimeout(timer.current!);
        timer.current=setTimeout(()=>{
         callback(...args)
        },delay)
        }
    },[delay]);


    useEffect(()=>{
     return ()=>{
        if(timer.current){
            clearTimeout(timer.current)
        }
     }
    },[delay])


    return debounce

};






export const useDebounceValue = <T,>(
  data: T,
  delay: number
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(data);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [data, delay]);

  return [value, setValue];
};
