//create my function and use ternary
// operators to set up my 
// conditional statements
// to change the value of "paid" from
// true to false upon being clicked on

import React, { useState } from "react";

function PaymentStatus() {
  const [pay, setPay] = useState("false");

  const changePay = () => {
    pay === "false" ? setPay("true") : setPay("false");
  };

  return (
    <span onClick={changePay} id="pay">
      Paid: {pay}
    </span>
  );
}
export default PaymentStatus;
