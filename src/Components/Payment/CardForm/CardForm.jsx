import React, { useState, useRef } from 'react';

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();
let MONTHS = {};
let YEARS = [CURRENT_YEAR];

for (let i = 1; i <= 12; i++) {
  MONTHS[i] = i.toString().length === 1 ? `0${i}` : i.toString();
  YEARS.push(YEARS[0] + i);
}

const CreditCardForm = () => {
  const [state, setState] = useState({
    sliderLocation: "",
    cardNumber: "",
    cardName: "",
    cardMonth: 0,
    cardYear: 0,
    cardCvv: "",
    cardType: "visa",
    toggleMonth: true,
    toggleYear: true,
    showCard: false,
    cardFlipped: false,
  });

  const numberCardRef = useRef(null);
  const nameCardRef = useRef(null);
  const expirationCardRef = useRef(null);
  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const cvvInputRef = useRef(null);

  const handleChange = (event, type) => {
    let { value } = event.target;

    if (type === "cardNumber") {
      value = value.replace(/ /gi, "");
      if (isNaN(value)) {
        return;
      } else {
        const cardType = getCardType(value);
        setState({ ...state, [type]: value, cardType });
      }
    } else if (type === "cardName") {
      var regName = /^[a-zA-Z\s]*$/;
      if (!regName.test(value)) {
      } else {
        setState({ ...state, [type]: value });
      }
    } else if (type === "cardMonth") {
      value = Number(value);
      setState((prevState) => ({
        ...prevState,
        [type]: value,
        toggleMonth: !prevState.toggleMonth,
      }));
    } else if (type === "cardYear") {
      value = Number(value);
      const { cardMonth } = state;
      if (value === CURRENT_YEAR && cardMonth <= CURRENT_MONTH) {
        setState((prevState) => ({
          ...prevState,
          cardMonth: 0,
          cardYear: value,
          toggleYear: !prevState.toggleYear,
          toggleMonth: !prevState.toggleMonth,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          [type]: value,
          toggleYear: !prevState.toggleYear,
        }));
      }
    } else if (type === "cardCvv") {
      value = value.replace(/ /gi, "");
      if (isNaN(value)) {
        return;
      } else {
        setState({ ...state, [type]: value });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const canSubmit = () => {
    const { cardNumber, cardName, cardMonth, cardYear, cardCvv } = state;

    return (
      cardNumber.length === 16 &&
      cardName.length > 4 &&
      cardCvv.length === 3 &&
      cardMonth !== 0 &&
      cardYear !== 0
    );
  };

  const moveSlider = (event, position) => {
    position = ["year", "month"].includes(position) ? "expiration" : position;
    setState({ ...state, sliderLocation: position });
  };

  const setFocus = (event, type) => {
    let { sliderLocation } = state;

    if (event.target.className.includes("year")) {
      event.stopPropagation();
    }
    this[`${type}Input`].focus();
  };

  const handleClick = (event) => {
    if (!cvvInputRef.current.contains(event.target)) {
      setState({ ...state, cardFlipped: false });
    }
    if (
      nameCardRef.current.contains(event.target) ||
      nameInputRef.current.contains(event.target) ||
      numberCardRef.current.contains(event.target) ||
      numberInputRef.current.contains(event.target) ||
      expirationCardRef.current.contains(event.target) ||
      monthInputRef.current.contains(event.target) ||
      yearInputRef.current.contains(event.target)
    )
      return;
    setState({ ...state, sliderLocation: "" });
  };

  // HELPERS
  const formatCardNumber = (value) => {
    let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const getCardType = (number) => {
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";
    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";
    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";
    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";
    return "visa";
  };

  // RENDERING
  const {
    cardNumber,
    cardName,
    cardMonth,
    cardYear,
    cardCvv,
    cardType,
    sliderLocation,
    toggleMonth,
    toggleYear,
    showCard,
    cardFlipped,
  } = state;

  let displayNumber = [];

  for (let i = 0; i < 16; i++) {
    let displayDigit = "#";
    if (typeof cardNumber[i] !== "undefined") {
      displayDigit = i > 3 && i < 12 ? "*" : cardNumber[i];
    }
    displayNumber.push(displayDigit);
  }

  const canSubmitForm = !canSubmit();

  return (
    <div className="card-form" onClick={handleClick}>
      <div className={`card container ${showCard ? "show" : ""}`}>
        <div className={`card inner ${cardFlipped ? "flipped" : ""}`}>
          <div className="front">
            <img
              className="card cover"
              src="https://source.unsplash.com/collection/8497941/430x270"
              onLoad={() => setState({ ...state, showCard: true })}
            />
            <div className="card overlay" />
            <div
              className={`card slider ${
                sliderLocation.length > 0 ? `on-${sliderLocation}` : ""
              }`}
            />
            <div className="card content">
              <div className="chip" />
              <div className={`type ${cardType}`} />
              <div
                className="number"
                onClick={(event) => setFocus(event, "number")}
                ref={numberCardRef}
              >
                {displayNumber.map((digit, index) => (
                  <div className="digit-wrapper" key={index}>
                    <div
                      className={digit === "#" ? "digit shown" : "digit hidden"}
                    >
                      #
                    </div>
                    <div
                      className={digit === "#" ? "digit hidden" : "digit shown"}
                    >
                      {digit === "#" ? "" : digit}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="name"
                onClick={(event) => setFocus(event, "name")}
                ref={nameCardRef}
              >
                <label htmlFor="name">Card Holder</label>
                <div id="name">
                  <div
                    className={`placeholder ${
                      cardName.length > 0 ? "hidden" : "shown"
                    }`}
                  >
                    FULL NAME
                  </div>
                  <div className="name-container">
                    {cardName.split("").map((char, index) => (
                      <div
                        className={`character ${
                          /\s/.test(char) ? "space" : ""
                        }`}
                        key={index}
                      >
                        {char}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="expiration"
                onClick={(event) => setFocus(event, "month")}
                ref={expirationCardRef}
              >
                <label htmlFor="expiration">Expires</label>
                <div id="expiration">
                  <div
                    className={`double-digit ${
                      toggleMonth ? "toggle1" : "toggle2"
                    }`}
                  >
                    {cardMonth === 0 ? "MM" : `${cardMonth + 100}`.slice(-2)}
                  </div>
                  <div className="double-digit">/</div>
                  <div
                    className={`year double-digit ${
                      toggleYear ? "toggle1" : "toggle2"
                    }`}
                    onClick={(event) => setFocus(event, "year")}
                  >
                    {cardYear === 0 ? "YY" : `${cardYear}`.slice(-2)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card cover back">
            <p>CVV</p>
          </div>
        </div>
      </div>
      <div className="card-inputs">
        <form onSubmit={handleSubmit}>
          <div className="lg-input">
            <label htmlFor="cardNumber"> Card Number</label>
            <input
              className="number-input"
              id="cardNumber"
              type="text"
              onChange={(event) => handleChange(event, "cardNumber")}
              onSelect={(event) => moveSlider(event, "number")}
              value={formatCardNumber(cardNumber)}
              ref={numberInputRef}
              maxLength="19"
            />
          </div>
          <div className="lg-input">
            <label htmlFor="cardName">Card Holder's Name</label>
            <input
              className="name-input"
              id="cardName"
              type="text"
              onChange={(event) => handleChange(event, "cardName")}
              onSelect={(event) => moveSlider(event, "name")}
              ref={nameInputRef}
              value={cardName}
              maxLength="24"
            />
          </div>
          <div className="med-input">
            <label htmlFor="cardMonth">Expiration Date</label>
            <select
              className="month-input"
              id="cardMonth"
              value={cardMonth}
              onChange={(event) => handleChange(event, "cardMonth")}
              onFocus={(event) => moveSlider(event, "month")}
              ref={monthInputRef}
            >
              <option value="0" disabled>
                Month
              </option>
              {Object.keys(MONTHS).map((monthKey) => (
                <option
                  key={monthKey}
                  value={monthKey}
                  disabled={
                    cardYear === CURRENT_YEAR &&
                    Number(monthKey) <= CURRENT_MONTH
                  }
                >
                  {MONTHS[monthKey]}
                </option>
              ))}
            </select>
            <select
              className="year-input"
              id="cardYear"
              value={cardYear}
              onChange={(event) => handleChange(event, "cardYear")}
              onFocus={(event) => moveSlider(event, "year")}
              ref={yearInputRef}
            >
              <option value="0" disabled>
                Year
              </option>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="sm-input">
            <label htmlFor="cardCvv">CVV</label>
            <input
              className="cvv-input"
              id="cardCvv"
              value={cardCvv}
              onChange={(event) => handleChange(event, "cardCvv")}
              onSelect={() => setState({ ...state, cardFlipped: true })}
              ref={cvvInputRef}
              maxLength="3"
            />
          </div>
          <button
            className={`lg-input ${canSubmitForm ? "disabled" : ""}`}
            disabled={canSubmitForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
