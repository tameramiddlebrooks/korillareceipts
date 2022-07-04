// component to render receipts
// the first receipt's
// person
// order
//- main
//- protein
//- rice
//- sauce
//- drink
//- cost


import React from "react";
import Payment from "./Payment";
function receiptItems(props) {
    // use map to display the objects of the 
    // component
  const receipts = props.receiptsArray.map((element, index) => {
    return (
      <div className="receipt" key={index}>
        <h2>{element.person}</h2>
        <h4>{element.order.main}</h4>
        <hr />
        <br />
        <span>Protein: {element.order.protein}</span>
        <br />
        <span>Rice: {element.order.rice}</span>
        <br />
        <span>Sauce: {element.order.sauce}</span>
        <br />
        <span>Drink: {element.order.drink}</span>
        <br />
        <span>Cost: {element.order.cost}</span>
        <br />
        <Payment receiptsArray={props.receiptsArray} />
        <br />
      </div>
    );
  });
  return <>{receipts}</>;
}
export default receiptItems;
