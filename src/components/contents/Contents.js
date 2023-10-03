import React from 'react';
import './_contents.scss';
import { Dropdown } from '@carbon/react';

const items = [
  {
    id: 'option-0',
    text: 'English',
  },
  {
    id: 'option-1',
    text: 'हिंदी',
  },
  {
    id: 'option-2',
    text: '日本語',
  },
  {
    id: 'option-3',
    text: 'русский',
  },
  {
    id: 'option-4',
    text: '中国人',
  },
];
const Contents = () => {
  return (
    <div className='contents'>
      <div className='contents-div1'>d</div>
      <div className='contents-div2'>
        <div className='contents-div2-div1'>
          <h2 className='contents-div2-h'>External Privacy Policy</h2>
          <Dropdown
            id='default'
            initialSelectedItem={items[0]}
            label='Option 1'
            items={items}
            itemToString={(item) => (item ? item.text : '')}
            className='contents-div2-d'
          />
        </div>
        <p className='contents-div2-p'>External Privacy Policy</p>
        <p className='contents-div2-p'>
          Thank you for visiting the Accel website. Accel respects your privacy.
          Whether you deal with us as an investor, entrepreneur or member of the
          general public, you are entitled to the protection of your personal
          data.
        </p>
        <p className='contents-div2-p'>
          The aim of this policy is to describe how and why we collect your
          personal data. We will also inform you of what we do with this data,
          with whom we share it, how we protect it and the choices you can make.
        </p>
        <p className='contents-div2-p'>
          This policy applies to the processing of your personal data in the
          framework of various services, tools applications, websites and
          marketing actions which are provided or operated by us or on our
          behalf(collectively, the “Accel Platform”). This policy does not apply
          to the privacy practices of companies we do not control (including any
          portfolio companies),nor to any information obtained or collected in
          connection with a separate business relationship with Accel or its
          affiliates, including as an investor in an Accel investment funds, an
          employee of Accel’s portfolio companies or as a service provider. The
          policy will also contain general rules and explanations regarding this
          processing.
        </p>
        <p className='contents-div2-p'>
          We have offices in the United Kingdom, United States of America and
          India. Our UK office is our representative in the European Union and
          is registered with the UK supervisory authority, the Information
          Commissioners Office (ICO). We will be considered the Data Controller
          and our UK address is 1 New Burlington Place, Mayfair, London W1S 2HR
          United Kingdom.
        </p>
      </div>
      <div className='contents-div3'></div>
    </div>
  );
};

export default Contents;
