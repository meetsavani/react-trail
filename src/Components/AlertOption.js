import React, { Component } from 'react';


class AlertOption extends Component {
  state = {
    agdam: 'tigdam',
    moneytype: 'INR'
  }

  render() {
    // const money = "USD";
    return (
      <div>
        <ControlledExpansionPanels moneytype="INR" />
      </div>
    );
  }
}

function ControlledExpansionPanels() {
  // state = {
  //   agdam: 'tigdam',
  //   moneytype: 'here'
  // }
  // constructor(props) {
  //   super();
  // }

  let money = "USD";

  const changeRupee = () => {
    money = document.getElementById('money').value;

    console.log(document.getElementById('money').value);
    console.log(money);
    //return money;
  }


  return (
    <div >
      <h1>Hello</h1>
      <div className="center">
        <select onChange={changeRupee} className="container center" id="money">
          <option id="USD" value="USD">USD</option>
          <option id="INR" value="INR">INR</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
          <option>All transactions</option>
        </select>
      </div>
      <h1>Value goes here <span id="here">{money}</span> </h1>
    </div>
  );
}

export default AlertOption;