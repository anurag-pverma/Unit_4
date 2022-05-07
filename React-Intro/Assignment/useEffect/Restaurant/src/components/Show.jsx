import { useState, useEffect } from "react";
import { Button } from "../components/Button";
export const Show = () => {
  const [table, setTable] = useState([]);
  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8080/posts");
      let data = await res.json();
      setTable(data);
      //   console.log(table);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Button table={table} setData={setTable} />
      {table.map((e) => {
        return (
          <div className='card'>
            <div className='upper'>
              <div className='image'>
                <img src={e.food_img} alt='' />
              </div>
              <div className='content'>
                <h2 className='title'>{e.res_name}</h2>
                <p className='category'>{e.category}</p>
                <p className='cost'>{e.cost}</p>
              </div>
              <div className='rateVote'>
                <p className='rating'>{e.rating}</p>
                <p className='vote'>{e.vote}</p>
                <p className='reviews'>{e.reviews}</p>
              </div>
            </div>
            <div className='bottom'>
              <button>Order Online</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
