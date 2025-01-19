import { useState } from "react";
function Counter() {
    //let count = 0;
    const [counterIndex,setCounterIndex] = useState(0);
    const incrementTotal = ()=>{
        setCounterIndex(counterIndex+1)
    }
  return (
    <main className="col-md-8 p-4">
      <h1 className="mb-3">Gagnier des points</h1>
      <button className="btn btn-primary" onClick={incrementTotal}>Cliquer ici</button>
      <h3 className="mb-3">Le total des points {counterIndex}</h3>
    </main>
  );
}
export default Counter;
