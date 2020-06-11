import React from 'react';
import PaymentCard from 'react-payment-card-component'

export default {
  title: 'Payment card',
  component: PaymentCard,
};

export const PaymentCardExample = () =>
  <PaymentCard
    bank='nubank'
    brand='mastercard'
  />
