import React from "react";

const List = () => {
  return (
    <div>
      <UnorderList />
      <OrderList />
      <InputData />
    </div>
  );
};

const UnorderList = () => {
  return (
    <div>
      <ul>
        <h2>Order List</h2>
        <AllList />
      </ul>
    </div>
  );
};

const OrderList = () => {
  return (
    <div>
      <ol>
        <AllList />
      </ol>
    </div>
  );
};

const AllList = () => {
  return (
    <div>
      <li>Ramesh</li>
      <li>Rakesh</li>
      <li>Vivek</li>
    </div>
  );
};

const InputData = () => {
  return (
    <div>
        <br></br>
      <div>
        <label>First Name:</label>
        <input />
        <label>Last Name:</label>
        <input />
        <label>Middle Name:</label>
        <input />
      </div>
      <div>
        <label>Select State</label>
        <select>
          <option>MH</option>
          <option>AP</option>
          <option>UP</option>
          <option>TS</option>
        </select>
      </div>
      <div>
        <label>
          Gender:
        </label>
        <input type="radio"></input>
      </div>
      <div>
        <label for="Email" className="Email" id="Email">Email :</label>
        <input type="Email"/><br/>
        <button type="submit">Submit</button>
      </div>
       
    </div>
  );
};
export default List;
