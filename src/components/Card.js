import React from "react";
import GooglePayButton from "@google-pay/button-react";
import "../styles/Card.css";
import creditCard from "../styles/side.png";
import wallet from "../styles/wal.png";

const Card = () => {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId:
              process.env.REACT_APP_MERCHANT_ID || "exampleGatewayMerchantId",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: process.env.REACT_APP_MERCHANT_ID,
      merchantName: "Demo Only",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "500",
      currencyCode: "USD",
      countryCode: "US",
    },
  };

  return (
    <div className="googlePayPaymentHold">
      <div className="gpayAsset1Hold flex justify-end">
        <img src={creditCard} alt="Credit Card" className="cc" />
      </div>

      <div className="flex mx-auto googlePayButtonContainer ml-4 mt-4 mb-20 md:ml-0 md:mt-0 md:mb-0">
        <GooglePayButton
          environment="TEST"
          paymentRequest={paymentRequest}
          onLoadPaymentData={(paymentData) => {
            console.log(paymentData.paymentMethodData);
          }}
          onError={(error) => {
            console.error("Payment failed: ", error);
          }}
        />
      </div>

      <div className="gpayAsset2Hold hidden lg:block">
        <img src={wallet} alt="Wallet" className="wal" />
      </div>
    </div>
  );
};

export default Card;
