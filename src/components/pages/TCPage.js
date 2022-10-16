import React from 'react';
import TCModal from './utility/TCModal'
import PageHeader from './utility/PageHeader'
import { HeaderOne } from './utility/HeaderData';

function TCPage() {
  return (
    <>
      <PageHeader {...HeaderOne}/>
      <TCModal/>
    </>
  );
}

export default TCPage;