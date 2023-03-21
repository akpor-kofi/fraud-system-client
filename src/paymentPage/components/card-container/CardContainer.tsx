import "./CardContainer.css";
import { Form } from "react-router-dom";
import { FormInputText } from "../form-input-text/FormInputText";
import { CreditCardField } from "../credit-card-field/CreditCardField";
import "./container-queries.css";
import { Input } from "postcss";
import { Sidebar } from "../sidebar/Sidebar";

export const CardContainer = (): JSX.Element => {
  const doSomething = () => {
    console.log("hello");
  };

  return (
    <div className="screen flex-center">
      <Form className="popup flex p-lg" onSubmit={doSomething}>
        <div className="close-btn pointer flex-center p-sm">
          <i className="ai-cross"></i>
        </div>

        {/*CARD FORM*/}
        <div className="flex-fill flex-vertical">
          <div className="header flex-between flex-vertical-center">
            <div className="flex-vertical-center">
              <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
              <span className="title">
                <strong>Kofi</strong>
                <span>Pay</span>
              </span>
            </div>
          </div>
          <div className="card-data flex-fill flex-vertical">
            <div className="flex-between flex-vertical-center">
              <FormInputText
                fieldName="Card Number"
                fieldInfo="Enter 16-digit card number on the card"
              />
              <div className="f-main-color pointer">
                <i className="ai-pencil"></i> Edit
              </div>
            </div>

            {/*Card Field*/}
            <CreditCardField />

            {/*Expiry Date */}
            <div className="flex-between">
              <FormInputText
                fieldName="Expiry Date"
                fieldInfo="Enter the expiration date of the card"
              />
              <div className="card-property-value flex-vertical-center">
                <div className="input-container half-width">
                  <input
                    className="numbers"
                    data-bound="mm_mock"
                    data-def="00"
                    type="number"
                    min="1"
                    max="12"
                    step="1"
                    placeholder="MM"
                  />
                </div>
                <span className="m-md">/</span>
                <div className="input-container half-width">
                  <input
                    className="numbers"
                    data-bound="yy_mock"
                    data-def="01"
                    type="number"
                    min="23"
                    max="99"
                    step="1"
                    placeholder="YY"
                  />
                </div>
              </div>
            </div>

            {/*CCV Number*/}
            <div className="flex-between">
              <FormInputText
                fieldName="CVC Number"
                fieldInfo="Enter card verification code from the back of the card"
              />
              <div className="card-property-value">
                <div className="input-container">
                  <input id="cvc" type="password" />
                  <i
                    id="cvc_toggler"
                    data-target="cvc"
                    className="ai-eye-open pointer"
                  ></i>
                </div>
              </div>
            </div>

            {/*Name */}
            <div className="flex-between">
              <FormInputText
                fieldName="Cardholder Name"
                fieldInfo="Enter cardholder's name"
              />
              <div className="card-property-value">
                <div className="input-container">
                  <input
                    id="name"
                    data-bound="name_mock"
                    data-def="Mr. Cardholder"
                    type="text"
                    className="uppercase"
                    placeholder="CARDHOLDER NAME"
                  />
                  <i className="ai-person"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="action flex-center">
            <button type="submit" className="b-main-color pointer">
              Pay Now
            </button>
          </div>
        </div>

        {/*SIDEBAR*/}
        <Sidebar />
      </Form>
    </div>
  );
};
