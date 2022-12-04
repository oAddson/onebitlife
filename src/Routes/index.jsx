import { useState } from "react";
import AllPages from "./AllPages";
import HomePage from "./HomePage";

export default Routes = () => {
  const [showHome, setShowHome] = useState("false");
  return <>{ showHome ? <HomePage/> : <AllPages /> }</> 
}