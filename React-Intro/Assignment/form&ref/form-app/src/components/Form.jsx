import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [table, setTable] = useState([]);
  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    marital_status: "Unmarried",
  });

  const handleChange = (e) => {
    if (e.target.name === "married") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.married) {
      data.married = "No";
    } else {
      data.married = "Yes";
    }

    fetch("http://localhost:8880/employee_details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dbData) => {
        // console.log(dbData);
        setTable([...table, dbData]);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8880/employee_details")
      .then((res) => res.json())
      .then((dbData) => {
        setTable(dbData);

        console.log("dbData", dbData);
      });
  }, []);

  useEffect(() => {
    console.log("table: ", table);
  }, [table]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name='name'
          type='text'
          placeholder='Enter Name'
        ></input>
        <br></br>

        <input
          onChange={handleChange}
          name='age'
          type='number'
          placeholder='Enter Age'
        ></input>
        <br></br>

        <input
          onChange={handleChange}
          name='address'
          type='text'
          placeholder='Enter Address'
        ></input>
        <br></br>

        <select onChange={handleChange} name='department'>
          <option value=''>--</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
          <option value='D'>D</option>
        </select>
        <br></br>

        <input
          onChange={handleChange}
          name='salary'
          type='number'
          placeholder='Enter Salary'
        ></input>
        <br></br>

        <input
          checked={this}
          onChange={handleChange}
          type='checkbox'
          id='married'
          name='married'
        ></input>
        <label htmlFor='married'> I am married </label>
        <br></br>

        <input type='submit' value='Submit'></input>
      </form>

      <table>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Department</th>
          <th>Married</th>
        </tr>
        <tbody>
          {table.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.name}</td>
                <td>{elem.age}</td>
                <td>{elem.address}</td>
                <td>{elem.department}</td>
                <td>{elem.salary}</td>
                <td>{elem.marital_status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Form };
