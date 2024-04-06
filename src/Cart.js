import React, { useState } from "react";

function Cart({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    creditCard: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    onSubmit(formData);
  };

  return (
    <div>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      /><br></br>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      /><br></br>
      <input
        type="text"
        name="creditCard"
        value={formData.creditCard}
        onChange={handleChange}
        placeholder="Credit Card"
      /><br></br>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      /><br></br>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Address 2"
      /><br></br>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      /><br></br>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
      /><br></br>
      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Zip"
      /><br></br>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
export default Cart;