import { useState } from "react";
export const Form = () => {
  const [form, setForm] = useState({
    food_img: "",
    res_name: "",
    payment_method: "",
    cost: "",
    rating: "",
    vote: "",
    minimum_price: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          name='food_img'
          placeholder='image_url'
        />
        <input
          type='text'
          onChange={handleChange}
          name='res_name'
          placeholder='res_name'
        />
        <input
          type='text'
          onChange={handleChange}
          name='payment_method'
          placeholder='payment_method'
        />
        <input
          type='text'
          onChange={handleChange}
          name='cost'
          placeholder='cost'
        />
        <input
          type='text'
          onChange={handleChange}
          name='rating'
          placeholder='rating'
        />
        <input
          type='text'
          onChange={handleChange}
          name='vote'
          placeholder='vote'
        />
        <input
          type='text'
          onChange={handleChange}
          name='reviews'
          placeholder='reviews'
        />
        <input
          type='text'
          onChange={handleChange}
          name='minimum_price'
          placeholder='minimum_price'
        />
        <input type='submit' value='submit' />
      </form>
    </>
  );
};
