import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const handleClick = () => {
    dataF.formData = formData;
    dataF.total = calculateTotal(dataF);
    onSubmit(dataF);
  };

  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {dataF.map((item) => (
          <div
            className="card mb-3"
            key={item.id}
            style={{ maxWidth: "200px", flex: "0 0 auto" }}
          >
            <img
              className="card-img-top img-thumbnail"
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "16px" }}>
                {item.title}
              </h5>
              <p className="card-text" style={{ fontSize: "14px" }}>
                ${item.price * item.quantity}
              </p>
              <p className="card-text" style={{ fontSize: "14px" }}>
                {item.quantity}x for ${item.price} each
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-4">
        <div className="col">
          <h4>Total:</h4>
          <p className="lead">${calculateTotal(dataF)}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleClick)} className="container mt-5">
        <div className="mb-3">
          <input
            {...register("fullName", { required: true })}
            type="text"
            className="form-control"
            name="fullName"
            placeholder="Full Name"
          />
          {errors.fullName && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <input
            {...register("email", { required: true })}
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <input
            {...register("creditCard", { required: true })}
            type="text"
            className="form-control"
            name="creditCard"
            placeholder="Credit Card"
          />
          {errors.creditCard && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <input
            {...register("address", { required: true })}
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
          />
          {errors.address && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <input
            {...register("address2")}
            type="text"
            className="form-control"
            name="address2"
            placeholder="Address 2"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              {...register("city", { required: true })}
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
            />
            {errors.city && <span>This field is required</span>}
          </div>
          <div className="col-md-3 mb-3">
            <input
              {...register("state", { required: true })}
              type="text"
              className="form-control"
              name="state"
              placeholder="State"
            />
            {errors.state && <span>This field is required</span>}
          </div>
          <div className="col-md-3 mb-3">
            <input
              {...register("zip", { required: true })}
              type="text"
              className="form-control"
              name="zip"
              placeholder="Zip"
            />
            {errors.zip && <span>This field is required</span>}
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Order
        </button>
      </form>
    </div>
  );
}

export default Cart;