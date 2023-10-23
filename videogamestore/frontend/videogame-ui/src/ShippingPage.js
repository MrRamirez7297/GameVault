import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";


function ShippingPage() {
  const { state } = useLocation();
  const totalPrice = state ? state.totalPrice : 0;
  const [showCreditInfo, setShowCreditInfo] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creditNum, setCreditNum] = useState("");
  const [creditCVV, setCreditCVV] = useState("");
  const [creditExp, setCreditExp] = useState("");
  const isCreditInfoValid = creditNum && creditCVV && creditExp;
  const isFormValid = firstName && lastName && email && phoneNumber;
  

  const handleCreditInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "credit-num":
        setCreditNum(value);
        break;
      case "credit-cvv":
        setCreditCVV(value);
        break;
      case "credit-exp":
        setCreditExp(value);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "first-name":
        setFirstName(value);
        break;
      case "last-name":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone-number":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSaveContinue2 = () => {
    if (isCreditInfoValid) {
    }
  };

  const handleSaveContinue = () => {
    if (isFormValid) {
      setShowCreditInfo(true);
    }
  };

  return (
    <div >
      <h1 className="title-c">Info Page</h1>

      <div>
      <p class="price">Total Price: ${totalPrice.toFixed(2)}</p>
        <div class="title-c">
          <label for="#first-name">First Name: </label>
          <input type="text" id="first-name" name="first-name" value={firstName}
            onChange={handleInputChange}></input>{" "}
          <label for="#last-name">Last Name: </label>
          <input type="text" id="last-name" name="last-name" value={lastName}
            onChange={handleInputChange}></input>
        </div>

        

        <div class="title-c">
          <label for="#email">Email: </label>
          <input type="email" id="email" name="email" value={email}
            onChange={handleInputChange}></input>

          <label for="#phone-number">Phone Number: </label>
          <input type="phone-number" id="phone-number" name="phone-number" value={phoneNumber}
            onChange={handleInputChange}></input>
        </div>

        <div >
          {" "}
          <button class="options" onClick={handleSaveContinue}  disabled={!isFormValid} >Save & Continue</button>
        </div>

        {showCreditInfo && (
          <div className="title-c">
            <label for="#credit-num">Credit Card Number: </label>
            <input
              type="text"
              id="credit-num"
              name="credit-num"
              value={creditNum}
              onChange={handleCreditInputChange}
              inputMode="numeric"
              pattern="[0-9]"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <label for="#credit-cvv"> CVV: </label>
            <input
              type="text"
              id="credit-cvv"
              name="credit-cvv"
              value={creditCVV}
              onChange={handleCreditInputChange}
              inputMode="numeric"
              pattern="[0-3]"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <label for="#credit-exp"> Expiration Date: </label>
            <input
              type="date"
              id="credit-exp"
              name="credit-exp"
              value={creditExp}
              onChange={handleCreditInputChange}
              inputMode="numeric"
              pattern="[0-9]"
              
              

            />

            <div >

            <Link to="/thank-you">
              <button className="options" onClick={handleSaveContinue2} disabled={!isCreditInfoValid}>Save & Continue</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ShippingPage;
