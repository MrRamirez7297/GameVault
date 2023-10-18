import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";


function ShippingPage() {
  const { state } = useLocation();
  const totalPrice = state ? state.totalPrice : 0;
  const [showCreditInfo, setShowCreditInfo] = useState(false);


  const handleSaveContinue = () => {
    setShowCreditInfo(true);
  };

  return (
    <div >
      <h1 className="title-c">Shipping Page</h1>

      <div>
      <p class="price">Total Price: ${totalPrice.toFixed(2)}</p>
        <div class="title-c">
          <label for="#first-name">First Name: </label>
          <input type="text" id="first-name" name="first-name"></input>{" "}
          <label for="#last-name">Last Name: </label>
          <input type="text" id="last-name" name="last-name"></input>
        </div>

        <div class="title-c">
          <label for="#address">Street Address: </label>
          <input type="text" id="address" name="address"></input>
          <label for="#zip-code">Zip Code: </label>
          <input type="text" id="zip-code" name="zip-code"></input>
          <label for="#city">City: </label>
          <input type="text" id="city" name="city"></input>
          <label for="#state"> State:</label>
          <select className="options" type="selection" id="state " name="state">
            <option value="State">Alabama</option>
            <option value="State">Alaska</option>
          </select>{" "}
        </div>

        <div class="title-c">
          <label for="#email">Email: </label>
          <input type="text" id="email" name="email"></input>

          <label for="#phone-number">Phone Number: </label>
          <input type="text" id="phone-number" name="phone-number"></input>
        </div>

        <div >
          {" "}
          <button class="options" onClick={handleSaveContinue}>Save & Continue</button>
        </div>

        {showCreditInfo && (
          <div className="title-c">
            <label for="#credit-num">Credit Card Number: </label>
            <input
              type="number"
              id="credit-num"
              name="credit-num"
              inputMode="numeric"
              pattern="[0-9]"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <label for="#credit-cvv">CVV: </label>
            <input
              type="number"
              id="credit-cvv"
              name="credit-cvv"
              inputMode="numeric"
              pattern="[0-9]"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <label for="#credit-exp">Expiration Date: </label>
            <input
              type="number"
              id="credit-exp"
              name="credit-exp"
              inputMode="numeric"
              pattern="[0-9]"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <div >

            <Link to="/thank-you">
              <button className="options">Save & Continue</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ShippingPage;
