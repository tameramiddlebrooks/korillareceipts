import React, { useState } from "react";
// import './style.css';
import receiptsArray from "./components/ReceiptsInfo";
import receiptItems from "./components/ReceiptItems"
import Receipts from "./components/Receipts";

  // create function to create conditional statements
  // based on whether or not the person has paid or
  // not
export default function App() {
  const [receipt, setReceipt] = useState(receiptsArray);
  
  const paid = () => {
    for (let i = 0; i < receiptsArray.length; i++) {
      if (receiptsArray[i].paid === true) {
        console.log("true");
      } else {
        console.log("false");
    }
  }
}

return (
  <div className="App">
    <h1>Korilla Receipts</h1>
    <button onClick={paid}>Paid</button>
    <button>Not Paid</button>
    <Receipts receiptsArray={Receipts} />
  </div>
)
};



//   // add the receipts to the state of the app
//   // then place them in an array to map over them for rendering