import type { ReactNode } from "react"
import { useCounterStore } from "../../store/counter-store";

type CounterProps={};

 const Counter = ({}:CounterProps):ReactNode => {
  const {count,increment,decrement}=useCounterStore();

  console.log("count render");
  return (
    <div className="py-10 px-4 border-b border-b-gray-300/50">

     <button onClick={increment} className="bg-blue-500 text-white px-4 py-1 rounded hover:scale-105 active:scale-90 transition-transform duration-150 cursor-pointer capitalize">up</button>
     <span className="text-gray-500 mx-6">{count}</span>
     <button onClick={decrement} className="bg-blue-500 text-white px-4 py-1 rounded hover:scale-105 active:scale-90 transition-transform duration-150 cursor-pointer capitalize">down</button>

    </div>
  );
}

export default Counter;
