import './card-container.css'
import './container-queries.css'
import {BrowserRouter, useLoaderData, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {FormInputText} from "../form-input-text/form-input-text";
import {CreditCardField} from "../credit-card-field/credit-card-field";
import {Sidebar} from "../sidebar/sidebar";

export type Card = {
  creditCardSlotOne: number,
  creditCardSlotTwo: number,
  creditCardSlotThree: number,
  creditCardSlotFour: number,

  expiryMonth: number,
  expiryYear: number,

  cvcNumber: number,
  cardHolder: string,
}

type User = {
  userId: string,
}

type Product = {
  id: string,
  desc: string,
  price: number,
}

export interface PathInfo {
  secret?: string;
  user?: User;
  product?: Product;
  merchantId: string
}

type paymentRequestPayload = {
  amount: number,
  card_holder: string,
  expiry_month: number,
  expiry_year: number,
  cvc: string,
  credit_card: string,
  user: string,
  merchant: string
}

export const CardContainer = () :JSX.Element => {
  const pathInfo = useLoaderData() as PathInfo
  const { register, handleSubmit, formState: { errors } } = useForm<Card>();

  console.log(pathInfo)

  // create mutation and query
  const mutation = useMutation({
    mutationFn: (newPayload) => {
      return fetch(`${import.meta.env.VITE_SERVER_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPayload)
      })
    }
  })

  const onSubmit: SubmitHandler<Card> = (card: Card) => {

    const reqBody: paymentRequestPayload = {
      amount: parseFloat(pathInfo.product?.price! + ""),
      card_holder: card.cardHolder,
      credit_card: "" + card.creditCardSlotOne + card.creditCardSlotTwo + card.creditCardSlotThree + card.creditCardSlotFour,
      cvc: "" + card.cvcNumber,
      expiry_month: parseInt(card.expiryMonth+""),
      expiry_year: parseInt(card.expiryYear+""),
      user: pathInfo.user?.userId!,
      merchant: pathInfo.merchantId
    }

    console.log(import.meta.env.VITE_SERVER_URL)

    // TODO
    // @ts-ignore
    mutation.mutate(reqBody)

    console.log(reqBody)
  }

  return (
      <div className="screen flex-center">
        {/* RESPONSIVE CARD DETAILS CONTAINER  */}
        <div className="more-details p-lg">
          <div className="details-flex">
            <span className="details">Company</span>
            <span className="details-abt">Apple</span>
          </div>
          <div className="details-flex">
            <span className="details">Order number</span>
            <span className="details-abt">429252965</span>
          </div>
          <div className="details-flex">
            <span className="details">Product</span>
            <span className="details-abt">MacBook Air</span>
          </div>
          <div className="details-flex">
            <span className="details">To Pay</span>
            <span className="details-abt">
            549.99 <span className="currency">usd</span>
          </span>
          </div>
        </div>
        <form className="popup flex p-lg" onSubmit={handleSubmit(onSubmit)}>
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
                <FormInputText fieldName="Card Number" fieldInfo="Enter 16-digit card number on the card" />
                <div className="f-main-color pointer"><i className="ai-pencil"></i> Edit</div>
              </div>

              {/*Card Field*/}
              <CreditCardField register={register}/>

              {/*Expiry Date */}
              <div className="flex-between">
                <FormInputText fieldName="Expiry Date" fieldInfo="Enter the expiration date of the card"/>
                <div className="card-property-value flex-vertical-center">
                  <div className="input-container half-width">
                    <input className="numbers" data-bound="mm_mock" data-def="00" type="number" min="1"
                           max="12" step="1" placeholder="MM" {...register("expiryMonth")}/>
                  </div>
                  <span className="m-md">/</span>
                  <div className="input-container half-width">
                    <input className="numbers" data-bound="yy_mock" data-def="01" type="number" min="23"
                           max="99" step="1" placeholder="YY" {...register("expiryYear")}/>
                  </div>
                </div>
              </div>

              {/*CCV Number*/}
              <div className="flex-between">
                <FormInputText fieldName="CVC Number" fieldInfo="Enter card verification code from the back of the card"/>
                <div className="card-property-value">
                  <div className="input-container">
                    <input id="cvc" type="password" {...register("cvcNumber")}/>
                    <i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
                  </div>
                </div>
              </div>

              {/*Name */}
              <div className="flex-between">
                <FormInputText fieldName="Cardholder Name" fieldInfo="Enter cardholder's name"/>
                <div className="card-property-value">
                  <div className="input-container">
                    <input id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="text"
                           className="uppercase" placeholder="CARDHOLDER NAME" {...register("cardHolder")}/>
                    <i className="ai-person"></i>
                  </div>
                </div>
              </div>


            </div>
            <div className="action flex-center">
              <button type="submit" className="b-main-color pointer">Pay Now</button>
            </div>
          </div>

          {/*SIDEBAR*/}

          <Sidebar pathInfo={pathInfo}/>
        </form>
      </div>
  )
}