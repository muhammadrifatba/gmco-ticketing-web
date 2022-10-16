import React from 'react';
import TCModal from '../TCModal'
import PageHeader from '../PageHeader'
import notFound from '../NotFound';
import { HeaderOne} from './HeaderData';


function TCPage() {
  return (
    <>
      <PageHeader {...HeaderOne}/>
      <TCModal/>
      
    </>
  );
}

export default TCPage;