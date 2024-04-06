import React, { useState } from "react";

function Cart({ onSubmit, dataF }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    creditCard: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    dataF.formData = formData;
    onSubmit(dataF);
  };

  return (
<<<<<<< HEAD
    <div className="container">
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            placeholder="Credit Card"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Address 2"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
            />
          </div>
          <div className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip"
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
=======
    <div>
      {/* Display cart items */}
      <div>
        {dataF.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>

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
>>>>>>> f90f6fc9c6e9cb15659a18215548530870a3e18d
    </div>
  );
}
export default Cart;