import React from 'react';
import './_request-page.scss';
import { Button, Checkbox, ComboBox, Dropdown, TextInput } from '@carbon/react';

const items = [
  {
    id: 'option-0',
    text: 'I received  SMS notice',
  },
  {
    id: 'option-1',
    text: 'Too many sales calls',
  },
  {
    id: 'option-2',
    text: 'Found my email on your online directory',
  },
  {
    id: 'option-3',
    text: 'Found my phone on your online directory',
  },
  {
    id: 'option-4',
    text: 'Download all my data',
  },
  {
    id: 'option-5',
    text: 'Delete all my data ',
  },
  {
    id: 'Do not contact',
    text: 'Found my phone on your online directory',
  },
];

const country = [
  {
    id: 'option-0',
    text: 'India',
  },
  {
    id: 'option-1',
    text: 'America',
  },
  {
    id: 'option-2',
    text: 'China',
  },
  {
    id: 'option-3',
    text: 'Russia',
  },
];

const type = [
  {
    id: 'option-0',
    text: 'Owner',
  },
  {
    id: 'option-1',
    text: 'User',
  },
  {
    id: 'option-2',
    text: 'Customer',
  },
];

const RequestPage = () => {
  return (
    <div className='request-page'>
      <div className='request-page-div1'>
        <h3 className='request-page-div1-h'>Welcome to the Opt-Out Webform!</h3>
        <p className='request-page-div1-p'>
          Your data privacy & security are important to us. To understand how we
          collect and use your personal data when delivering our services, you
          can read our <a href='privacy-policy'>Privacy Policy</a>.
        </p>
        <p className='request-page-div1-p'>
          Our algorithm scans many data sources on a daily basis. To prevent
          your contact details (emails and phone numbers) to be added to our
          database we ask you to provide us with these details so we can add
          them to a suppression list
        </p>
        <p className='request-page-div1-p'>
          Lusha will use the information you provide within this form to verify
          that you are the holder of the relevant email, and identify your
          information to fulfil your request.
        </p>
      </div>
      <div className='request-page-div2'>
        <h3 className='request-page-div2-h'> Why Did You Reach This Page?</h3>
        <ComboBox
          onChange={() => {}}
          id='carbon-combobox'
          items={items}
          downshiftProps={{
            onStateChange: () => {
              console.log('the state has changed');
            },
          }}
          itemToString={(item) => (item ? item.text : '')}
          className='request-page-div2-ComboBox'
        />
        <h3 className='request-page-div2-h'> Country of Residence</h3>
        <Dropdown
          id='default'
          initialSelectedItem={country[0]}
          label='Option 1'
          items={country}
          itemToString={(item) => (item ? item.text : '')}
          className='request-page-div2-ComboBox'
        />
        <h3 className='request-page-div2-h'> Country of Residence</h3>
        <Dropdown
          id='default'
          initialSelectedItem={type[0]}
          label='Option 1'
          items={type}
          itemToString={(item) => (item ? item.text : '')}
          className='request-page-div2-ComboBox'
        />

        <h3 className='request-page-div2-h'> Email</h3>
        <TextInput
          id='email'
          type='email'
          className='request-page-div2-ComboBox'
        />
        <h3 className='request-page-div2-h'> Contact</h3>
        <TextInput
          id='number'
          type='number'
          className='request-page-div2-ComboBox'
        />
        <div className='request-page-div2-div'>
          <Checkbox labelText={` I'm not a robot`} id='checkbox-label-1' />
          <Button>Submit</Button>
        </div>
      </div>
      <img src='./images/send-email.png' alt='' />
      <div className='request-page-div3'>
        <h3 className='request-page-div3-h'>Thank you!</h3>
        <p className='request-page-div3-p'>
          The information you provide in this form is processed by Lusha Systems
          Inc. (“Lusha”) for our legitimate interest to enable our users and
          individuals in our database to control their personal data and/or, as
          applicable depending on the country you have provided above, to comply
          with laws providing specific privacy/data protection rights to
          individuals.
        </p>
        <p className='request-page-div3-p'>
          Lusha will retain this information for the duration necessary to
          process your request. When your request is fulfilled, we will archive
          this information for 7 years, in order to comply with our legal and
          contractual obligations or to protect ourselves from any potential
          disputes (as required by laws applicable to record-keeping and to have
          proof and evidence concerning our relationship, e.g. should any legal
          issues arise following the termination of your account), all in
          accordance with our Data Retention Policy.
        </p>
        <p className='request-page-div3-p'>
          Lusha will use the information you provide within this form to verify
          that you are the holder of the relevant email, and identify your
          information to fulfil your request.
        </p>
      </div>
    </div>
  );
};

export default RequestPage;
