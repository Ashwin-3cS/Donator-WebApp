// import React, { useState } from "react";

// const RegistrationPortal = () => {
//   const [restaurant, setRestaurant] = useState({ name: "", location: "" });
//   const [id, setId] = useState(null);
//   const [food, setFood] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [showDonationReceipt, setShowDonationReceipt] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newId = Math.floor(Math.random() * 1000000);
//     setId(newId);
//     // save restaurant and id to an object or database
//   };

//   const saveFood = (food) => {
//     setFood(food);
//     // save food and id to an object or database
//     setShowDonationReceipt(true);
//   };

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Register</button>
//       {showModal && (
//         <div className="modal">
//           <form onSubmit={handleSubmit}>
//             <label>
//               Restaurant Name:
//               <input
//                 type="text"
//                 value={restaurant.name}
//                 onChange={(e) =>
//                   setRestaurant({ ...restaurant, name: e.target.value })
//                 }
//               />
//             </label>
//             <label>
//               Location:
//               <input
//                 type="text"
//                 value={restaurant.location}
//                 onChange={(e) =>
//                   setRestaurant({ ...restaurant, location: e.target.value })
//                 }
//               />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//           {id && <p>Your id is {id}</p>}
//           <button onClick={() => setShowModal(false)}>Close</button>
//         </div>
//       )}
//       {id && (
//         <div>
//           <label>
//             Date:
//             <input type="date" />
//           </label>
//           <GridComponent>
//             <InputComponent id={id} placeholder="enter the name of the food item" />
//             <InputComponent
//               placeholder="Food you offer"
//               onChange={(e) => setFood(e.target.value)}
//             />
//           </GridComponent>
//           <button onClick={() => saveFood(food)}>Donate</button>
//         </div>
//       )}
//       {showDonationReceipt && (
//         <p>Donation received from {restaurant.name} (ID: {id}) - {food}</p>
//       )}
//     </div>
//   );
// };

// const GridComponent = ({ children }) => {
//   return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>{children}</div>;
// };

// const InputComponent = ({ id, placeholder, onChange }) => {
//   return <input type="text" id={id} placeholder={placeholder} onChange={onChange} />;
// };

// export default RegistrationPortal;











import React, { useState } from "react";

const RegistrationPortal = () => {
  const [restaurant, setRestaurant] = useState({ name: "", location: "" });
  const [donationId, setDonationId] = useState(0);
  const [food, setFood] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDonationReceipt, setShowDonationReceipt] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = (donationId + 1).toString().padStart(3, "0");
    setDonationId(donationId + 1);
    // save restaurant and id to an object or database
  };

  const saveFood = (food) => {
    setFood(food);
    // save food and id to an object or database
    setShowDonationReceipt(true);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Register</button>
      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Restaurant Name:
              <input
                type="text"
                value={restaurant.name}
                onChange={(e) =>
                  setRestaurant({ ...restaurant, name: e.target.value })
                }
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                value={restaurant.location}
                onChange={(e) =>
                  setRestaurant({ ...restaurant, location: e.target.value })
                }
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {donationId > 0 && <p>Your ID is {donationId.toString().padStart(3, "0")}</p>}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
      {donationId > 0 && (
        <div>
          <label>
            Date:
            <input type="date" />
          </label>
          <GridComponent>
            <InputComponent id={donationId} placeholder="Your ID " />
            <InputComponent
              placeholder="Food you offer"
              onChange={(e) => setFood(e.target.value)}
            />
          </GridComponent>
          <button onClick={() => saveFood(food)}>Donate</button>
        </div>
      )}
      {showDonationReceipt && (
        <p>Donation received from {restaurant.name} (ID: {donationId.toString().padStart(3, "0")}) - {food}</p>
      )}
    </div>
  );
};

const GridComponent = ({ children }) => {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>{children}</div>;
};

const InputComponent = ({ id, placeholder, onChange }) => {
  return <input type="text" id={id} placeholder={placeholder} onChange={onChange} />;
};

export default RegistrationPortal;

