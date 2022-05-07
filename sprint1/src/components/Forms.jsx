import { useState, useEffect } from "react";
import Table from "./Table";
import styles from "./Forms.module.css"

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "sales",
    salary: "",
    married: false,
  });

  const [apiData, setApiData] = useState([]);

  const handleChange = (event) => {
    let name = event.target.name;
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
      console.log(event);
    } else {
      setFormData({ ...formData, [name]: event.target.value });
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      let response = await fetch("http://localhost:3000/details");
      let data = await response.json();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const postData = async (dataObj) => {
    try {
      let response = await fetch("http://localhost:3000/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(formData);
    setFormData({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      married: false,
    });
      setApiData([...apiData, formData]);
  };

  return (
      <div className={styles.form}>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="age">Enter Age</label>
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="address">Enter Address</label>
        <br />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />
              <select name="department" value={formData.department} onChange={handleChange}>
          <option value="sales">Sales</option>
          <option value="operations">Operations</option>
        </select>
        <br />
        <label htmlFor="salary">Enter salary</label>
        <br />
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
              <div>
              <input
          type="checkbox"
          name="married"
          checked={formData.married}
          onChange={handleChange}
        />
        <label htmlFor="married">Married</label>
              </div>
              <div>
              <button>Submit</button>
              </div>
       
      </form>

      <Table data={apiData} />
    </div>
  );
};

export default Forms;
