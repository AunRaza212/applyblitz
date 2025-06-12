// app/checkout/page.js

"use client";
import GooglePayButton from "../../components/GooglePayButton";
import React from "react";

export default function Checkout() {
  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <GooglePayButton/>
      {/* Add checkout content here */}
    </div>
  );
}
