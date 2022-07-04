import React from "react";
import receiptItems from "./ReceiptItems";

function Receipts(props) {
    return (
      <div className="container">
        <receiptItems receiptsArray= {props.receiptsArray} />
      </div>
    );
  }
  
  export default Receipts;