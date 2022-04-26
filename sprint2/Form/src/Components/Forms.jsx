import axios from "axios";
import { useEffect, useState } from "react";

export const Forms = () => {

    const [data, setData] = useState([]);
    const handleData = (e) => {
        const { id, value } = e.target;

        setData({...data,[id]:value})
    }

    const Submit = (e) => {
        axios.post("http://localhost:3000/users", data).then(() => {
            alert("Employee details entered");
        })
    }

    // table
    const [tData, setTData] = useState([]);
    useEffect(() => {
        getData();
    },setTData);

    const getData = (e) => {
        axios.get("http://localhost:3000/users", data).then((res) => {
            setTData(res.data);
            console.log(res.data)
        })
    }

    // if delete const delete=(id)=>{const result=tData.filter((el)=>{return el.id!=id})setTData([...result])}
    // pass delete in {tData.map((e)=>(key={id} delete={delete}))}
    return (
        <div>
            <div style={{
                width: "250px",
                margin: "auto",
                height: "250px",
                border: "1px solid gray",
                padding: "2%",
            }}>
            <form onSubmit={Submit}>
                <h4>Employee Details Form</h4>
                <input type="text" id="name" placeholder="Enter your name" onChange={handleData}/>
                <br/>
                <input type="number" id="age" placeholder="Enter age" onChange={handleData} />
                <br/>
                <input type="text" id="address" placeholder="Address" onChange={handleData} />
                <br/>
                <select type="text" id="department" placeholder="department" onChange={handleData}>
                <option>----</option>
                <option>Student</option>
                <option>Instructional Associate</option>
                <option>Instructor</option>
                </select>
                <br/>
                <input type="Number" id="salary" placeholder="Enter Salary" onChange={handleData} />
                <br/>
                <input type="checkbox" id="martialState" placeholder="martialState" onChange={handleData}/>
                <br/>
                <input type="submit" value={"User Registration"}/>
            </form>
            </div>

            <div id="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>MaritailStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tData.map((e) => (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.address}</td>
                                <td>{e.department}</td>
                                <td>{e.salary}</td>
                                <td>{e.maritialState=="on" ? "married":"single"}</td>
                                <br></br>
                                
                            </tr>    
                        ))}
                    </tbody>
                </table>

            </div>
            
         
        </div>
    )
}