import React from "react";

function Confirmation({ dataF, updateHooks }) {
  return (
    <div>
      <div>
        <h1>Payment summary:</h1>
        <h3>{dataF.formData.fullName}</h3>
        <p>{dataF.formData.email}</p>
        <p>{dataF.formData.city}, {dataF.formData.state} {dataF.formData.zip}</p>
        <button onClick={updateHooks}>Submit</button>
      </div>
      <div>
        {dataF.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Confirmation;