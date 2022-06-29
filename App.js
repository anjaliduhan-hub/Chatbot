import React from "react"
import TargetX from "./Components/TargetX.js"
import SymphonyX from "./Components/SymphonyX.js"
import LSNetX from "./Components/LSNetX.js"

// let key = [0, 1, 2];
let component = [<TargetX/>, <SymphonyX/>, <LSNetX/>];
function App() {

  const attri=document.currentScript.getAttribute('one');
  console.log(attri);
  console.log(component[attri]);
  // setTimeout(()=>{
  //   const attri=document.currentScript?.getAttribute('one');
  //   console.log(attri);
  // },2000);
  let id = attri;
  return ( 
     <>
      {component[id]}
      </>
  );
}

export default App;
 






















