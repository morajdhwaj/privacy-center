import React, { useState } from 'react';
import './_dpar-web.scss';
import {
  Button,
  ComboBox,
  Dropdown,
  TextInput,
  FileUploaderDropContainer,
} from '@carbon/react';

const entity = [
  {
    id: 'option-0',
    text: 'OneTrust',
  },
  {
    id: 'option-1',
    text: 'Convercent by OneTrust',
  },
  {
    id: 'option-2',
    text: 'Planetly by OneTrust',
  },
  {
    id: 'option-3',
    text: 'Tugboat Logic by OneTrust',
  },
  {
    id: 'option-4',
    text: 'DataGuidance',
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
const confirm = [
  {
    id: 'option-0',
    text: 'I understand',
  },
];

const header = [
  {
    id: 0,
    langName: 'English',
    heading1: 'Welcome to OneTrust Privacy Webform!',
    heading2: 'Thank you.',
    desc1:
      'You can use this form to submit a request regarding your personal information that is processed by OneTrust and its subsidiaries and affiliates (Convercent by OneTrust, OneTrust DataGuidance, Planetly by OneTrust, PrivacyConnect, Redacted.ai, and Tugboat Logic by OneTrust). Please complete this form and we will respond as soon as possible.',
    desc2:
      'Please select from the list below the entity with which you have a relationship. For example, if you are an Employee or Job Applicant, please select the entity where you work/worked or submitted your application. If you are a Marketing Recipient, please select the entity that contacted you.',
  },
  {
    id: 1,
    langName: 'हिन्दी',
    heading1: 'वनट्रस्ट गोपनीयता वेबफॉर्म में आपका स्वागत है!',
    heading2: 'धन्यवाद।',
    desc1:
      'आप इस फॉर्म का उपयोग अपनी व्यक्तिगत जानकारी के संबंध में अनुरोध सबमिट करने के लिए कर सकते हैं जिसे वनट्रस्ट और उसकी सहायक कंपनियों और सहयोगियों (वनट्रस्ट द्वारा कन्वर्सेंट, वनट्रस्ट डेटागाइडेंस, वनट्रस्ट द्वारा प्लैनेटली, प्राइवेसीकनेक्ट, रेडैक्टेड.एआई, और वनट्रस्ट द्वारा टगबोट लॉजिक) द्वारा संसाधित किया जाता है। कृपया इस फॉर्म को पूरा करें और हम यथाशीघ्र जवाब देंगे।',
    desc2:
      'कृपया नीचे दी गई सूची में से उस इकाई का चयन करें जिसके साथ आपका संबंध है। उदाहरण के लिए, यदि आप एक कर्मचारी या नौकरी आवेदक हैं, तो कृपया उस इकाई का चयन करें जहां आप काम करते हैं/कार्य करते हैं या अपना आवेदन जमा किया है। यदि आप मार्केटिंग प्राप्तकर्ता हैं, तो कृपया उस इकाई का चयन करें जिसने आपसे संपर्क किया था।',
  },
];

const DparWeb = () => {
  const [selectedTag, setSelectedTag] = useState(0);
  const [request, setRequest] = useState('');
  const [langId, setLangId] = useState(0);

  const handleLang = (e) => {
    setLangId(e.selectedItem.id);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  console.log(header[1]);

  return (
    <div className='dpar-web'>
      <Dropdown
        id='default'
        initialSelectedItem={header[0]}
        label='0'
        items={header}
        itemToString={(item) => (item ? item.langName : '')}
        className='dpar-web-div2-combo'
        onChange={handleLang}
      />
      {header.map((head) => {
        return (
          <div className='dpar-web-div1' key={head.id}>
            <h3 className='dpar-web-div1-h'>{head?.heading1}</h3>
            <p className='dpar-web-div1-p'>{head.desc1}</p>
            <p className='dpar-web-div1-p'>{head.desc2}</p>
            <h3 className='dpar-web-div1-h'>{head.heading2}</h3>
          </div>
        );
      })}
      <div className='dpar-web-div1'>
        <h3 className='dpar-web-div1-h'>
          Welcome to OneTrust Privacy Webform!
        </h3>
        <p className='dpar-web-div1-p'>
          You can use this form to submit a request regarding your personal
          information that is processed by OneTrust and its subsidiaries and
          affiliates (Convercent by OneTrust, OneTrust DataGuidance, Planetly by
          OneTrust, PrivacyConnect, Redacted.ai, and Tugboat Logic by OneTrust).
          Please complete this form and we will respond as soon as possible.
        </p>
        <p className='dpar-web-div1-p'>
          Please select from the list below the entity with which you have a
          relationship. For example, if you are an Employee or Job Applicant,
          please select the entity where you work/worked or submitted your
          application. If you are a Marketing Recipient, please select the
          entity that contacted you.
        </p>
        <h3 className='dpar-web-div1-h'>Thank you.</h3>
      </div>
      <div className='dpar-web-div2'>
        <h3 className='dpar-web-div2-h'> Choose Entity</h3>
        <ComboBox
          onChange={() => {}}
          id='carbon-combobox'
          items={entity}
          downshiftProps={{
            onStateChange: () => {
              console.log('the state has changed');
            },
          }}
          itemToString={(item) => (item ? item.text : '')}
          className='dpar-web-div2-combo'
        />
        <h3 className='dpar-web-div2-h'> I am a (an)</h3>
        <div className='dpar-web-div2-div1'>
          <p
            className={` ${
              selectedTag === 'Platform User'
                ? 'dpar-web-div2-div1-tag-selected'
                : 'dpar-web-div2-div1-tag'
            }`}
            onClick={() => handleTagClick('Platform User')}
          >
            Platform User
          </p>
          <p
            className={` ${
              selectedTag === 'Employee'
                ? 'dpar-web-div2-div1-tag-selected'
                : 'dpar-web-div2-div1-tag'
            }`}
            onClick={() => handleTagClick('Employee')}
          >
            Employee
          </p>
          <p
            className={` ${
              selectedTag === 'Job Applicant'
                ? 'dpar-web-div2-div1-tag-selected'
                : 'dpar-web-div2-div1-tag'
            }`}
            onClick={() => handleTagClick('Job Applicant')}
          >
            Job Applicant
          </p>
          <p
            className={` ${
              selectedTag === 'Marketing Recipient'
                ? 'dpar-web-div2-div1-tag-selected'
                : 'dpar-web-div2-div1-tag'
            }`}
            onClick={() => handleTagClick('Marketing Recipient')}
          >
            Marketing Recipient
          </p>
          <p
            className={` ${
              selectedTag === 'Authorized Agent'
                ? 'dpar-web-div2-div1-tag-selected'
                : 'dpar-web-div2-div1-tag'
            }`}
            onClick={() => handleTagClick('Authorized Agent')}
          >
            Authorized Agent
          </p>
        </div>
        <h3 className='dpar-web-div2-h'> Choose Entity</h3>
        <Dropdown
          id='default'
          initialSelectedItem={country[0]}
          label='Option 1'
          items={country}
          itemToString={(item) => (item ? item.text : '')}
          className='dpar-web-div2-combo'
        />
        <h3 className='dpar-web-div2-h'>First Name</h3>
        <TextInput id='name' type='name' className='dpar-web-div2-combo' />
        <h3 className='dpar-web-div2-h'>Last Name</h3>
        <TextInput
          id='surname'
          type='surname'
          className='dpar-web-div2-combo'
        />
        <h3 className='dpar-web-div2-h'>Your Email / Agent's Email</h3>
        <TextInput id='email' type='email' className='dpar-web-div2-combo' />
        <h3 className='dpar-web-div2-h'>Request Details</h3>
        <textarea
          id='text'
          class='dpar-web-div2-req'
          rows='5'
          onChange={handleChange}
          value={request}
        />
        <h3 className='dpar-web-div2-h'>Please note</h3>
        <p className='dpar-web-div2-details'>
          OneTrust and its subsidiaries and affiliates can only action requests
          from individuals with a direct relationship to OneTrust or its
          subsidiaries and affiliates. This includes requests from our
          customers, job applicants, employees or marketing recipients.
        </p>
        <p className='dpar-web-div2-details'>
          As we are B2B Privacy Software providers (data processors), we cannot
          respond to any requests on behalf of companies that use our software
          for their own privacy programs. For such requests, we recommend that
          you reach out to such companies directly.
        </p>
        <h3 className='dpar-web-div2-h'> Choose Entity</h3>
        <ComboBox
          onChange={() => {}}
          id='carbon-combobox'
          items={confirm}
          downshiftProps={{
            onStateChange: () => {
              console.log('the state has changed');
            },
          }}
          itemToString={(item) => (item ? item.text : '')}
          className='dpar-web-div2-combo'
        />
      </div>

      <div className='dpar-web-div3'>
        <FileUploaderDropContainer
          labelText='Drag and drop files here or click to upload'
          multiple={true}
          accept={['image/jpeg', 'image/png']}
          disabled={false}
          name=''
          tabIndex={0}
          className='dpar-web-div3-up'
        />
        <Button className='dpar-web-div3-b'>Submit</Button>
      </div>
      <div className='dpar-web-div4'>
        <h5 className='dpar-web-div4-h'>
          If you are looking to make a request to a company that uses OneTrust
          to manage their privacy, security, or third party risk programs,
          please directly do so on their website.
        </h5>
        <p className='dpar-web-div4-p'>
          neTrust LLC - 1200 Abernathy Rd NE, Atlanta, GA 30328, U.S.A. OneTrust
          Technology Limited - 82 St John St, Farringdon, London, EC 1M 4JN,
          U.K. Contact us at dpo@onetrust.com Privacy Notice
        </p>
      </div>
    </div>
  );
};

export default DparWeb;
