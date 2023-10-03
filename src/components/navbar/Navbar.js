import React from 'react';
import './_navbar.scss';
import { Button } from '@carbon/react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-div'>
        <div className='navbar-div-div1'>
          <img
            src='./images/concur-logo.png'
            alt=''
            className='navbar-div-div1-img'
          />
        </div>
        <div className='navbar-div-div2'>
          <Button kind='ghost'>View Past Request</Button>
          <Button kind='danger'>Make a Privacy Request</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
