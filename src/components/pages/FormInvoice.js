import React from 'react';
import Form from './Form'
import Invoice from './SeatInvoice'
import PageHeader from './PageHeader';
import '../style/FormInvoice.css'

function FormInvoice() {
  return (
    <>
      <PageHeader title={"Order Confirmation"} bgColour="true"/>
      <div className='FormInvoice-cont'>
        <div className="FormInvoice-item">
          <Invoice/>
        </div>
        <Form/>
      </div>
    </>
  );
}

export default FormInvoice;