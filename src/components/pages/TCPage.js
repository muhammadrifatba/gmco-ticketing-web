import React from 'react';
import TCModal from './utils/TCModal'
import PageHeader from './utils/PageHeader'
import { HeaderOne } from './utils/HeaderData';

function TCPage() {
  return (
    <>
      <PageHeader {...HeaderOne}/>
      <TCModal/>
    </>
  );
}

export default TCPage;