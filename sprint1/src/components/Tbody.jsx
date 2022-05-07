import React from "react";

const Tbody = ({ value }) => {
  const { name, age, address, department, salary, married } = value;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{department}</td>
        <td>{salary}</td>
              {married ? <td>Married</td> : <td>Not Married</td>}
      </tr>
    </>
  );
};

export default Tbody;
