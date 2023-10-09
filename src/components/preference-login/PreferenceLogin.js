import React, { useState } from 'react';
import './_preference-login.scss';
import { Button, Dropdown } from '@carbon/react';

const langs = [
  {
    id: '0',
    text: 'English',
    data: [
      {
        Heading: 'Preferences Login',
        submit: 'Submit',
        LoginAs: [
          {
            id: 'option-1',
            text: 'UserID',
          },
          {
            id: 'option-2',
            text: 'Email',
          },

          {
            id: 'option-3',
            text: 'Mobile No.',
          },
        ],
      },
    ],
  },
  {
    id: '1',
    text: 'हिन्दी',
    data: [
      {
        Heading: 'प्राथमिकताएँ लॉगिन करें',
        submit: 'जमा करें',
        LoginAs: [
          {
            id: 'option-1',
            text: 'उपयोगकर्ता पहचान',
          },
          {
            id: 'option-2',
            text: ' ईमेल',
          },

          {
            id: 'option-3',
            text: 'मोबाइल नंबर',
          },
        ],
      },
    ],
  },
];

const PreferenceLogin = () => {
  const [lang, setLang] = useState(0);
  const [loginType, setLoginType] = useState('User Id');
  const [submit, setSubmit] = useState(false);

  const handleType = (e) => {
    setLoginType(e.selectedItem.text);
  };

  const handleLang = (e) => {
    setLang(e.selectedItem.id);
  };

  const handleSubmit = (e) => {
    setSubmit(!submit);
  };

  console.log(lang);
  console.log(loginType);

  return (
    <div className='preference-login'>
      <Dropdown
        id='default'
        initialSelectedItem={langs[0]}
        label='Option 1'
        items={langs}
        itemToString={(item) => (item ? item.text : '')}
        className='preference-login-div-div2-drop'
        onChange={handleLang}
      />

      {langs[lang].data.map((item, i) => {
        return (
          <div className='preference-login-div' key={i}>
            <div className='preference-login-div-div1'>
              <img
                src='./images/concur-logo.png'
                alt=''
                height={100}
                width={80}
              />
            </div>
            <div className='preference-login-div-div2'>
              <h5>{item.Heading}</h5>

              <Dropdown
                id='default'
                initialSelectedItem={langs[lang].data[0].LoginAs[0]}
                label='Option 1'
                items={langs[lang].data[0].LoginAs}
                itemToString={(item) => (item ? item.text : '')}
                className='preference-login-div-div2-type-drop'
                onChange={handleType}
              />
              <div className='preference-login-div2-div '>
                <h5>{loginType}</h5>
                <input
                  type={loginType !== 'Mobile No.' ? 'email' : 'number'}
                  id={loginType === 'Mobile No.' ? 'email' : 'number'}
                  className='preference-login-div-div2-email'
                />
              </div>
              <Button onClick={handleSubmit}>{item.submit}</Button>
            </div>
          </div>
        );
      })}

      {submit && (
        <div className='preference-otp-div'>
          <div className='preference-login-div-div1'>
            <img
              src='./images/concur-logo.png'
              alt=''
              height={100}
              width={80}
            />
          </div>
          <div className='preference-login-div-div2'>
            <h5>Enter OTP</h5>
            <div className='preference-login-input-div'>
              <input className='preference-login-input-box' />
              <input className='preference-login-input-box' />
              <input className='preference-login-input-box' />
              <input className='preference-login-input-box' />
            </div>
            <Button className='preference-login-confirm' href='/preference'>
              Confirm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreferenceLogin;
