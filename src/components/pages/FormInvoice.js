import React from 'react';
import Form from './Form'
import Invoice from './SeatInvoice'
import PageHeader from './utility/PageHeader';
import '../style/FormInvoice.css'

function FormInvoice() {
  return (
    <>
      <PageHeader title={"Order Confirmation"} bgColour="true"/>
      <div className='FormInvoice-wrap'>
        <div className='FormInvoice-cont'>
          <div className="FormInvoice-item">
            <Invoice/>
          </div>
          <Form/>
        </div>
      </div>
    </>
  );
}

export default FormInvoice;